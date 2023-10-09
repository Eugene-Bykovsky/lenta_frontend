import { configureStore } from '@reduxjs/toolkit'

import { forecastReducer } from './features/table-forecast/forecastSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// import axios from 'axios'
// import * as api from './services/api'
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
