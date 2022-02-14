import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type IncomeBand = 'None' | 'Poverty' | 'Above'

type DOBBand = '2004+' | '2003' | '1998' | '<1998'

export interface WorkflowState {
    choseToProceed: boolean;
    activeStep: number;
    dependentChildren?: boolean;
    marriedFilingJoint?: boolean;
    hasSSN?: boolean;
    incomeBand?: IncomeBand;
    priorIncomeBand?: IncomeBand;
    dobBand?: DOBBand;
    student?: boolean;
    fosterCare?: boolean;
    homeless?: boolean;
}

const initialState: WorkflowState = {
    choseToProceed: false,
    activeStep: 0
};

export const workflowSlice = createSlice({
    name: 'workflow',
    initialState,
    reducers: {
        chooseToProceed: (state) => {
            state.choseToProceed = true
        },
        setDependentChildren: (state, action: PayloadAction<boolean>) => {
            state.dependentChildren = action.payload
        },
        setFilingJoint: (state, action: PayloadAction<boolean>) => {
            state.marriedFilingJoint = action.payload
            state.hasSSN = undefined
            state.incomeBand = undefined
        },
        setHasSSN: (state, action: PayloadAction<boolean>) => {
            state.hasSSN = action.payload
        },
        setIncomeBand: (state, action: PayloadAction<IncomeBand>) => {
            state.incomeBand = action.payload
        },
        setPriorIncomeBand: (state, action: PayloadAction<IncomeBand>) => {
            state.priorIncomeBand = action.payload
        },
        setDOBBand: (state, action: PayloadAction<DOBBand>) => {
            state.dobBand = action.payload
        },
        setStudent: (state, action: PayloadAction<boolean>) => {
            state.student = action.payload
        },
        setFosterCare: (state, action: PayloadAction<boolean>) => {
            state.fosterCare = action.payload
        },
        setHomeless: (state, action: PayloadAction<boolean>) => {
            state.homeless = action.payload
        },
        nextRelevantStep: (state) => {
            const nextStep = findNextRelevantStep(state, state.activeStep)
            state.activeStep = nextStep
        },
        backOneStep: (state) => {
            const previousStep = findPreviousRelevantStep(state, state.activeStep)
            state.activeStep = previousStep
        }
    }
})

export const {
    chooseToProceed,
    setDependentChildren,
    setFilingJoint,
    setHasSSN,
    setIncomeBand,
    setPriorIncomeBand,
    setDOBBand,
    setStudent,
    setFosterCare,
    setHomeless,
    nextRelevantStep,
    backOneStep
} = workflowSlice.actions;

export const choseToProceed = (state: RootState): boolean =>  (state.workflow.choseToProceed)

export const getActiveStep = (state: RootState): number => (state.workflow.activeStep)

export const getNextStepNeeded = (state: RootState): number => {
    const {
        dependentChildren,
        marriedFilingJoint,
        hasSSN,
        incomeBand,
        priorIncomeBand,
        dobBand,
        student,
        fosterCare,
        homeless
    } = state.workflow
    if (dependentChildren) {
        return 15
    }
    if (dependentChildren === undefined) {
        return 0
    }
    if (marriedFilingJoint === undefined) {
        return 1
    }
    if (hasSSN === undefined) {
        return 2
    }
    if (incomeBand === undefined) {
        return 3
    }
    if (incomeBand === 'None' && priorIncomeBand === undefined) {
        return 4
    }
    if (dobBand === undefined) {
        return 5
    }
    if (student === undefined) {
        return 6
    }
    if (student === true && fosterCare === undefined) {
        return 7
    }
    if (fosterCare === false && homeless === undefined) {
        return 8
    }
    return 9
}

const findNextRelevantStep = (state: WorkflowState, step: number): number => {
    if (step === 15) {
        return 15
    }
    if (stepIsRelevantBase(state)(step + 1)) {
        return step + 1
    }
    return findNextRelevantStep(state, step + 1)
}

const findPreviousRelevantStep = (state: WorkflowState, step: number): number => {
    if (step === 0) {
        return 0
    }
    if (stepIsRelevantBase(state)(step - 1)) {
        return step - 1
    }
    return findPreviousRelevantStep(state, step - 1)
}

const stepIsRelevantBase = ({
    dependentChildren,
    marriedFilingJoint,
    hasSSN,
    incomeBand,
    priorIncomeBand,
    dobBand,
    student,
    fosterCare,
    homeless
}: WorkflowState) => (step: number): boolean => {
    if (step === 0) {
        return true
    }
    if (dependentChildren) {
        return (step >= 15) || (step === 0)
    }
    if (hasSSN === false) {
        return (step >= 15) || (step <= 2)
    }
    if (incomeBand === 'Above') {
        return (step >= 15) || (step <= 3)
    }
    if (incomeBand === 'Poverty' && step === 4) {
        return false
    }
    if (priorIncomeBand === 'Above' || (incomeBand === 'None' && priorIncomeBand === 'None')) {
        return (step >= 15) || (step <= 4)
    }
    if (dobBand === '2004+' && step < 15 && step > 5) {
        return false
    }
    if (homeless === false && step < 15 && step > 8) {
        return false
    }
    switch(step) {
        case 4:
            return incomeBand !== 'Poverty'
        case 6:
            return dobBand === '2003'
        case 7:
            return (dobBand === '1998') || (student ?? false)
        case 8:
            return fosterCare === false
        default:
            break
    }
    return true
}

export const stepIsRelevant = (state: RootState) => (step: number): boolean => {
    return stepIsRelevantBase(state.workflow)(step)
}

export const getDependentChildren = (state: RootState) => {
    return state.workflow.dependentChildren
}

export const getFilingJoint = (state: RootState) => {
    return state.workflow.marriedFilingJoint
}

export const getHasSSN = (state: RootState) => {
    return state.workflow.hasSSN
}

export const getIncomeBand = (state: RootState) => {
    return state.workflow.incomeBand
}

export const getPriorIncomeBand = (state: RootState) => {
    return state.workflow.priorIncomeBand
}

export const getDOBBand = (state: RootState) => {
    return state.workflow.dobBand
}

export const getStudent = (state: RootState) => {
    return state.workflow.student
}

export const getFosterCare = (state: RootState) => {
    return state.workflow.fosterCare
}

export const getHomeless = (state: RootState) => {
    return state.workflow.homeless
}

export default workflowSlice.reducer;
