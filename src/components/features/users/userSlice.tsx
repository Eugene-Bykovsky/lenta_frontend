import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { isAxiosError } from 'axios'
import { baseUrl } from '../../../services/api'
import { TUser } from '../../../services/types'
import { RootState } from '../../../store'

export interface UserState {
  loading: boolean
  users: TUser[] | []
  error: string | null
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: null,
}

export const fetchUsers = createAsyncThunk<TUser[], void, { state: RootState }>(
  'users/fetchById',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(baseUrl)
      return response.data as TUser[]
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
      const { loading } = getState().users
      if (loading) {
        return false
      }
    },
  }
)

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string | null
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = false
        state.error = null
      })
  },
})

export const userReducer = userSlice.reducer

// export const fetchUsersTEST = createAsyncThunk<
//   TUser[],
//   {
//     extra: {
//       client: AxiosStatic
//       api: typeof api
//     }
//     // rejectValue: AxiosError
//   }
// >('@@users/load-users', async (thunkApi) => {
//   try {
//     const response = await thunkApi.extra.client.get(api.baseUrl)
//     return response.data as TUser[]
//   } catch (err) {
//     return console.log(err)
//   }
// })
