import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { isAxiosError } from 'axios'
import { testUrl } from '../../services/api'
import { TApiForecast } from '../../services/types'
import { RootState } from '../../store'

export interface TableForecast {
  loading: boolean
  forecast: TApiForecast | []
  error: string | null
}

const initialState: TableForecast = {
  loading: false,
  forecast: [],
  error: null,
}

export const fetchForecast = createAsyncThunk<
  TApiForecast,
  void,
  { state: RootState }
>(
  'forecast/fetchForecast',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(testUrl)
      return response.data as TApiForecast
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
      const { loading } = getState().forecast
      if (loading) {
        return false
      }
    },
  }
)

const forecastSlice = createSlice({
  name: '@@forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string | null
      })

      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload
        state.loading = false
        state.error = null
      })
  },
})

export const forecastReducer = forecastSlice.reducer
