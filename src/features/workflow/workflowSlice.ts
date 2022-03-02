import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type IncomeBand = 'None' | 'PossibleDependent' | 'Poverty' | 'Above'

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
    resident?: boolean;
    disability?: boolean;
    livingWithSomeone?: boolean;
    familyConnection?: boolean;
    younger?: boolean;
    livingExpensesPaid?: boolean;
    cohabitation?: boolean;
    extendedFamily?: boolean;
}

const initialState: WorkflowState = {
    choseToProceed: false,
    activeStep: 0
};

const resultStep = 17

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
            state.fosterCare = undefined
            state.homeless = undefined
        },
        setStudent: (state, action: PayloadAction<boolean>) => {
            state.student = action.payload
            if (!state.student) {
                state.fosterCare = undefined
                state.homeless = undefined
            }
        },
        setFosterCare: (state, action: PayloadAction<boolean>) => {
            state.fosterCare = action.payload
        },
        setHomeless: (state, action: PayloadAction<boolean>) => {
            state.homeless = action.payload
        },
        setResident: (state, action: PayloadAction<boolean>) => {
            state.resident = action.payload
        },
        setDisability: (state, action: PayloadAction<boolean>) => {
            state.disability = action.payload
        },
        setLivingWithSomeone: (state, action: PayloadAction<boolean>) => {
            state.livingWithSomeone = action.payload
        },
        setFamilyConnection: (state, action: PayloadAction<boolean>) => {
            state.familyConnection = action.payload
        },
        setYounger: (state, action: PayloadAction<boolean>) => {
            state.younger = action.payload
        },
        setLivingExpensesPaid: (state, action: PayloadAction<boolean>) => {
            state.livingExpensesPaid = action.payload
        },
        setCohabitation: (state, action: PayloadAction<boolean>) => {
            state.cohabitation = action.payload
        },
        setExtendedFamily: (state, action: PayloadAction<boolean>) => {
            state.extendedFamily = action.payload
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
    setResident,
    setDisability,
    setLivingWithSomeone,
    setFamilyConnection,
    setYounger,
    setLivingExpensesPaid,
    setCohabitation,
    setExtendedFamily,
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
        homeless,
        resident,
        disability,
        livingWithSomeone,
        familyConnection,
        younger,
        livingExpensesPaid,
        cohabitation,
        extendedFamily
    } = state.workflow
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
    if ((incomeBand === 'None') && priorIncomeBand === undefined) {
        return 4
    }
    if (dobBand === undefined) {
        return 5
    }
    if ((dobBand === '1998') && student === undefined) {
        return 6
    }
    if ((student === true || dobBand === '2003') && fosterCare === undefined) {
        return 7
    }
    if ((fosterCare === false) && homeless === undefined) {
        return 8
    }
    if (resident === undefined) {
        return 9
    }
    if (disability === undefined) {
        return 10
    }
    if (
            (
                disability ||
                ['2004+', '2003'].includes(dobBand || '') ||
                (dobBand === '1998' && student)
            ) && (livingWithSomeone === undefined)
        ) {
        return 11
    }
    if (livingWithSomeone && familyConnection === undefined) {
        return 12
    }
    if (familyConnection && younger === undefined) {
        return 13
    }
    if (livingExpensesPaid === undefined) {
        return 14
    }
    if (cohabitation === undefined) {
        return 15
    }
    if (extendedFamily === undefined) {
        return 16
    }
    return resultStep
}

const findNextRelevantStep = (state: WorkflowState, step: number): number => {
    if (step === resultStep) {
        return resultStep
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
    homeless,
    resident,
    disability,
    livingWithSomeone,
    familyConnection,
    younger,
    livingExpensesPaid,
    cohabitation,
}: WorkflowState) => (step: number): boolean => {
    if (step === 0) {
        return true
    }
    if (dependentChildren) {
        return (step >= resultStep) || (step === 0)
    }
    if (hasSSN === false) {
        return (step >= resultStep) || (step <= 2)
    }
    if (incomeBand === 'Above') {
        return (step >= resultStep) || (step <= 3)
    }
    if (['Poverty', 'PossibleDependent'].includes(incomeBand || '') && step === 4) {
        return false
    }
    if (priorIncomeBand === 'Above' || (incomeBand === 'None' && priorIncomeBand === 'None')) {
        return (step >= resultStep) || (step <= 4)
    }
    if (dobBand === '2004+' && step < resultStep && step > 5) {
        return false
    }
    if (homeless === false && step < resultStep && step > 8) {
        return false
    }
    if (resident === false && step < resultStep && step > 9) {
        return false
    }
    if (familyConnection && disability && step < resultStep && step > 12) {
        return false
    }
    if (younger && step < resultStep && step > 13) {
        return false
    }
    if (livingExpensesPaid === false && step < resultStep && step > 14) {
        return false
    }
    switch(step) {
        case 4:
            return !['Poverty', 'PossibleDependent'].includes(incomeBand || '')
        case 6:
            return dobBand === '1998'
        case 7:
            return (dobBand === '2003') || (dobBand === '1998' && (student ?? false))
        case 8:
            return ((dobBand === '2003') || (dobBand === '1998' && (student ?? false))) && (fosterCare === false)
        case 11:
            return (disability ||
                (['2004+', '2003'].includes(dobBand || '') ||
                (dobBand === '1998' && !student))) ?? false
        case 12:
            return livingWithSomeone === true
        case 13:
            return familyConnection === true
        case 15:
            return livingExpensesPaid || false
        case 16:
            return ((livingExpensesPaid || false) && !cohabitation)
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

export const getResident = (state: RootState) => {
    return state.workflow.resident
}

export const getDisability = (state: RootState) => {
    return state.workflow.disability
}

export const getLivingWithSomeone = (state: RootState) => {
    return state.workflow.livingWithSomeone
}

export const getFamilyConnection = (state: RootState) => {
    return state.workflow.familyConnection
}

export const getYounger = (state: RootState) => {
    return state.workflow.younger
}

export const getLivingExpensesPaid = (state: RootState) => {
    return state.workflow.livingExpensesPaid
}

export const getCohabitation = (state: RootState) => {
    return state.workflow.cohabitation
}

export const getExtendedFamily = (state: RootState) => {
    return state.workflow.extendedFamily
}

export default workflowSlice.reducer;
