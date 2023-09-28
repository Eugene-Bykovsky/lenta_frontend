import { configureStore } from '@reduxjs/toolkit'
// import axios from 'axios'
import { userReducer } from './components/features/users/userSlice'
// import * as api from './services/api'

export const store = configureStore({
  reducer: {
    users: userReducer,
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
