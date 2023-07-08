import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  status: 'error' | 'pending' | 'success' | 'nomessage'
  message: string
}

const initialState: InitialState = {
  status: 'nomessage',
  message: '',
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    set: (state, action: { payload: InitialState; type: string }) => {
      state.status = action.payload.status
      state.message = action.payload.message
    },
    remove: (state) => {
      state.status = initialState.status
      state.message = initialState.message
    },
  },
})

export const messageActions = messageSlice.actions
