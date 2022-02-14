import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface WorkflowState {
    choseToProceed: boolean;
    activeStep: number;
    dependentChildren?: boolean;
    marriedFilingJoint?: boolean;
    hasSSN?: boolean;
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
        },
        setHasSSN: (state, action: PayloadAction<boolean>) => {
            state.hasSSN = action.payload
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
    nextRelevantStep,
    backOneStep
} = workflowSlice.actions;

export const choseToProceed = (state: RootState): boolean =>  (state.workflow.choseToProceed)

export const getActiveStep = (state: RootState): number => (state.workflow.activeStep)

export const getNextStepNeeded = (state: RootState): number => {
    const {
        dependentChildren,
        marriedFilingJoint,
        hasSSN
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
    return 3
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
    hasSSN
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

export default workflowSlice.reducer;
