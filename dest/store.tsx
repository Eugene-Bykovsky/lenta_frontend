import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './features/filters/filtersSlice'
import { forecastReducer } from './features/table-forecast/forecastSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    filters: filtersReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
