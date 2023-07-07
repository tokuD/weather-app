'use client'
import { RootState } from '@/app/store'
import { useFetch } from '@/hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Osaka-Shi'

const Card = () => {
  const weather = useSelector((state: RootState) => state.weather)
  const fetchData = useFetch()

  useEffect(() => {
    fetchData(url)
  }, [fetchData])

  return (
    <section className="bg-[#78B3EC] p-2 rounded-md text-white">
      <h2>{weather.location.name}</h2>
      <p>{weather.current.temp_c} ℃</p>
      <p>風速: {weather.current.wind_kph} km/h</p>
      <p>風向き: {weather.current.wind_dir}</p>
      <p>気圧: {weather.current.pressure_in}</p>
    </section>
  )
}

export default Card
