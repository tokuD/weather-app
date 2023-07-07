import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  location: {
    name?: string
    region?: string
    country?: string
    lat?: number
    lon?: number
    tz_id?: string
    localtime_epoch?: number
    localtime?: string
  }
  current: {
    last_updated_epoch?: number
    temp_c?: number
    temp_f?: number
    is_day?: number
    condition?: {
      text?: string
      icon?: string
      code?: number
    }
    wind_mph?: number
    wind_kph?: number
    wind_degree?: number
    wind_dir?: string
    pressure_mb?: number
    pressure_in?: number
    precip_mm?: number
    precip_in?: number
    humidity?: number
    colud?: number
    feelslike_c?: number
    feelslike_f?: number
    vis_km?: number
    vis_miles?: number
    uv?: number
    gust_mph?: number
  }
}

const initialState: InitialState = {
  location: {},
  current: {},
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    set: (state, action: { type: string; payload: InitialState }) => {
      state.location = action.payload.location
      state.current = action.payload.current
    },
  },
})

export const weatherActions = weatherSlice.actions
