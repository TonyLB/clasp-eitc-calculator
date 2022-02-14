import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface WorkflowState {
    choseToProceed: boolean;
    activeStep: number;
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
        }
    }
})

export const { chooseToProceed } = workflowSlice.actions;

export const choseToProceed = (state: RootState): boolean =>  (state.workflow.choseToProceed)

export const getActiveStep = (state: RootState): number => (state.workflow.activeStep)

interface StepProperty {
    completed: boolean;
    
}

// export const getStepProps = (state: RootState): 

export default workflowSlice.reducer;
