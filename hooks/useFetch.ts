import { messageActions } from '@/app/store/message-slice'
import { weatherActions } from '@/app/store/weather-slice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const useFetch = () => {
  const dispatch = useDispatch()
  const fetchData = useCallback(
    async (url: string) => {
      dispatch(messageActions.set({ status: 'pending', message: 'Loading...' }))
      const response = await fetch(url, {
        headers: {
          'X-RapidAPI-Key':
            'c0ce06afdbmsh9bc57dd65a97d13p15edf1jsn07cf1da49932',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      })
      if (!response.ok) {
        dispatch(
          messageActions.set({ status: 'error', message: 'Fetch data failed.' })
        )
        return
      }
      const data = await response.json()
      dispatch(weatherActions.set(data))
      dispatch(
        messageActions.set({
          status: 'success',
          message: 'Fetch data successfully.',
        })
      )
    },
    [dispatch]
  )
  return fetchData
}

export default useFetch
