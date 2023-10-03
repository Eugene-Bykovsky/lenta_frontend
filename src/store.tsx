import { configureStore } from '@reduxjs/toolkit'
// import axios from 'axios'
import { forecastReducer } from './features/table-forecast/forecastSlice'
// import * as api from './services/api'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
  devTools: true,
  // middleware: (getDefaultMiddlware) =>
  //   getDefaultMiddlware({
  //     thunk: {
  //       extraArgument: {
  //         client: axios,
  //         api,
  //       },
  //     },
  //     serializableCheck: false,
  //   }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
