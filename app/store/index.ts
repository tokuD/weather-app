import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth-slice'
import { weatherSlice } from './weather-slice'
import { messageSlice } from './message-slice'

const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    weather: weatherSlice.reducer,
    message: messageSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
