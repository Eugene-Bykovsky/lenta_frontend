import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios, { isAxiosError } from 'axios'
import { categoriesUrl, forecastUrl } from '../../services/api'
import { TCategory, TForecastsResults } from '../../services/types'
import { RootState } from '../../store'

export interface TableForecast {
  loading: boolean
  forecast: TForecastsResults[] | []
  category: TCategory[] | []
  error: string | null
}

const initialState: TableForecast = {
  loading: false,
  forecast: [],
  category: [],
  error: null,
}

export const fetchForecast = createAsyncThunk<
  TForecastsResults[],
  void,
  { state: RootState }
>(
  'forecast/fetchForecast',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(forecastUrl)
      console.log('fetchForecast')

      return response.data.results as TForecastsResults[]
    } catch (error) {
      if (isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message)
      } else {
        throw error
      }
    }
  }

  // {
  //   condition: (_, { getState }) => {
  //     const { loading } = getState().forecast
  //     console.log(111, loading)

  //     if (loading) {
  //       return false
  //     }
  //   },
  // }
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
      console.log('categoriesUrl')
      return response.data.results as TCategory[]
    } catch (error) {
      if (isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message)
      } else {
        throw error
      }
    }
  }

  // {
  //   condition: (_, { getState }) => {
  //     const { loading, category } = getState().forecast
  //     if (loading && category.length > 0) {
  //       return false
  //     }
  //   },
  // }
)

const forecastSlice = createSlice({
  name: '@@forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.category = action.payload
        state.loading = false
        state.error = null
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false
          state.error = action.payload as string | null
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true
          state.error = null
        }
      )
  },
})

export const forecastReducer = forecastSlice.reducer

export const selectForecastTable = createSelector(
  (state: RootState) => state.forecast,

  (forecastState) => {
    return forecastState.forecast.map((fcstItem) => {
      const categoryConcat = forecastState.category.find(
        (cat) => cat.pr_sku_id === fcstItem.pr_sku_id
      )
      return { ...fcstItem, ...categoryConcat, checked: false }
    })
  }
)
