import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface WorkflowState {
    choseToProceed: boolean;
    activeStep: number;
    dependentChildren?: boolean;
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
    nextRelevantStep,
    backOneStep
} = workflowSlice.actions;

export const choseToProceed = (state: RootState): boolean =>  (state.workflow.choseToProceed)

export const getActiveStep = (state: RootState): number => (state.workflow.activeStep)

export const getNextStepNeeded = (state: RootState): number => {
    const { dependentChildren } = state.workflow
    if (dependentChildren) {
        return 15
    }
    if (dependentChildren === undefined) {
        return 0
    }
    return 1
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
    dependentChildren
}: WorkflowState) => (step: number): boolean => {
    if (step === 0) {
        return true
    }
    if (dependentChildren) {
        return step >= 15
    }
    return true
}

export const stepIsRelevant = (state: RootState) => (step: number): boolean => {
    return stepIsRelevantBase(state.workflow)(step)
}

export const getDependentChildren = (state: RootState) => {
    return state.workflow.dependentChildren
}

export default workflowSlice.reducer;
