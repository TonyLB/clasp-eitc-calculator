import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { WorkflowPrompts, SupportedLanguages, translations } from './translations';

export interface LocalizationState {
    language: SupportedLanguages;
}

const initialState: LocalizationState = {
    language: 'en-EN'
};

export const localizationSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<SupportedLanguages>) => {
            state.language = action.payload;
        }
    }
})

export const { set } = localizationSlice.actions;

export const localize = (state: RootState) => (prompt: WorkflowPrompts): string => (translations[state.localization.language][prompt])

export default localizationSlice.reducer;
