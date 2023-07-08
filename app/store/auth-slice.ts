import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  username: string | null
  email: string | null
  isAuthenticated: boolean
} = {
  username: null,
  email: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (
      state,
      action: { payload: { username: string; email: string }; type: string }
    ) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.username = null
      state.email = null
      state.isAuthenticated = false
    },
  },
})

export const authActions = authSlice.actions
