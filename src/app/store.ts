import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import localizationReducer from '../features/localization/localizationSlice'
import workflowReducer from '../features/workflow/workflowSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    localization: localizationReducer,
    workflow: workflowReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
