import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios, { isAxiosError } from 'axios'
import { categoriesUrl, forecastPages, forecastRows } from '../../services/api'
import { convertDateFormat } from '../../services/const'
import { TCategory, TForecastsResults } from '../../services/types'
import { RootState } from '../../store'

export interface TableForecast {
  isAuth: boolean
  page: number
  rows: number | null
  loadingForecast: boolean
  loadingCategory: boolean
  forecast: TForecastsResults[] | []
  category: TCategory[] | []
  error: string | null
}

const initialState: TableForecast = {
  isAuth: false,
  page: 1,
  rows: null,
  loadingForecast: false,
  loadingCategory: false,
  forecast: [],
  category: [],
  error: null,
}

export const fetchForecast = createAsyncThunk<
  TForecastsResults[],
  { id?: number; qty?: number | null },
  { state: RootState }
>(
  'forecast/fetchForecast',
  async ({ id, qty }, thunkApi) => {
    try {
      let response

      if (qty !== undefined) {
        console.log('qty !== undefined', 1, `${forecastRows}${qty}`)

        response = await axios.get(`${forecastRows}${qty}`)
      } else {
        console.log('qty === undefined', 2, `${forecastPages}${id}`)
        response = await axios.get(`${forecastPages}${id}`)
      }

      return response.data.results as TForecastsResults[]
    } catch (error) {
      if (isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message)
      } else {
        throw error
      }
    }
  },

  {
    condition: (_, { getState }) => {
      const { loadingForecast } = getState().forecast
      if (loadingForecast) {
        return false
      }
    },
  }
)

export const fetchCategory = createAsyncThunk<
  TCategory[],
  void,
  { state: RootState }
>(
  'category/fetchCategory',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(categoriesUrl)
      return response.data.results as TCategory[]
    } catch (error) {
      if (isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message)
      } else {
        throw error
      }
    }
  },

  {
    condition: (_, { getState }) => {
      const { loadingCategory } = getState().forecast
      if (loadingCategory) {
        return false
      }
    },
  }
)

const forecastSlice = createSlice({
  name: '@@forecast',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload
    },

    setPage(state, action) {
      state.page = action.payload
    },
    setRows(state, action) {
      state.page = 1
      state.rows = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload
        state.loadingForecast = false
        state.error = null
      })
      .addCase(fetchForecast.pending, (state) => {
        state.loadingForecast = true
        state.error = null
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.category = action.payload
        state.loadingCategory = false
        state.error = null
      })
      .addCase(fetchCategory.pending, (state) => {
        state.loadingCategory = true
        state.error = null
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loadingForecast = false
          state.loadingCategory = false
          state.error = action.payload as string | null
        }
      )
  },
})

export const forecastReducer = forecastSlice.reducer
export const { setAuth, setPage, setRows } = forecastSlice.actions

export const selectForecastTable = createSelector(
  (state: RootState) => state.forecast,

  (forecastState) => {
    return forecastState.forecast.map((fcstItem) => {
      const categoryConcat = forecastState.category.find(
        (cat) => cat.pr_sku_id === fcstItem.pr_sku_id
      )
      return {
        ...fcstItem,
        ...categoryConcat,
        checked: false,
        date: fcstItem.date ? convertDateFormat(fcstItem.date) : fcstItem.date,
      }
    })
  }
)
