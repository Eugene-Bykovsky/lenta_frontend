import { createSlice } from '@reduxjs/toolkit'

export interface IFilters {
  days: null | number
}

const initialState: IFilters = {
  days: null,
}

const filterSlice = createSlice({
  name: '@@filters',
  initialState,
  reducers: {
    setDays(state, action) {
      state.days = action.payload
    },
  },
})

export const filtersReducer = filterSlice.reducer
export const { setDays } = filterSlice.actions
