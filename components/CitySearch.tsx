'use client'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import AutoCompleteInput from './AutoCompleteInput'
import { useFetch } from '@/hooks'

type Props = {}

const cities = [
  'Tokyo',
  'Osaka-Shi',
  'New York City',
  'London',
  'Paris',
  'Berlin',
  'Sydney',
  'Beijing',
  'Moscow',
  'Rio de Janeiro',
  'Cairo',
  'Rome',
  'Toronto',
  'Seoul',
  'Amsterdam',
  'Dubai',
  'Mumbai',
  'Bangkok',
  'Los Angeles',
  'Chicago',
  'Barcelona',
  'Lima',
  'Hanoi',
  'Mexico City',
  'Budapest',
  'Cape Town',
  'Oslo',
  'Stockholm',
  'Wellington',
  'Copenhagen',
  'Vienna',
  'Madrid',
  'Athens',
  'Singapore',
  'Jakarta',
  'Nairobi',
  'Dublin',
  'Lisbon',
  'Helsinki',
  'Prague',
  'Warsaw',
  'Buenos Aires',
  'Brussels',
  'Zurich',
  'Kuala Lumpur',
  'Sao Paulo',
  'Delhi',
  'Reykjavik',
  'Kiev',
  'Munich',
  'Hamburg',
  'Istanbul',
  'Santiago',
  'Edinburgh',
  'Melbourne',
  'Auckland',
  'San Francisco',
  'Vancouver',
  'Montreal',
  'Edmonton',
  'Perth',
  'Brisbane',
  'Adelaide',
  'Honolulu',
  'Denver',
  'Miami',
  'Las Vegas',
  'Seattle',
  'Portland',
  'Austin',
  'Boston',
  'Philadelphia',
  'Atlanta',
  'Phoenix',
  'Dallas',
  'Houston',
  'Detroit',
  'San Diego',
  'Washington, D.C.',
  'Minneapolis',
  'Orlando',
  'Tampa',
  'Charlotte',
  'Nashville',
  'New Orleans',
  'Kansas City',
  'Salt Lake City',
  'San Antonio',
  'Indianapolis',
  'Columbus',
  'Cleveland',
  'Pittsburgh',
  'St. Louis',
  'Milwaukee',
  'Cincinnati',
  'Buffalo',
  'Raleigh',
  'Portland',
  'Sacramento',
  'Oakland',
]

const CitySearch = (props: Props) => {
  const [showList, setShowList] = useState(false)
  const [inputCity, setInputCity] = useState('')
  const [filteredCity, setFilteredCity] = useState(cities)
  const fetchData = useFetch()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value)
    setFilteredCity(
      cities.filter((city) =>
        city.toLowerCase().includes(inputCity.toLowerCase())
      )
    )
    setShowList(true)
  }

  const setSelectHandler = (selected: string) => {
    setShowList(false)
    setInputCity(selected)
  }

  const onLoadHandler = () => {
    if (inputCity.trim() === '') return
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${inputCity}`
    fetchData(url)
  }

  return (
    <div className="flex gap-4 p-2" onClick={() => setShowList(false)}>
      <AutoCompleteInput
        onChangeHandler={onChangeHandler}
        setSelectHandler={setSelectHandler}
        inputValue={inputCity}
        options={filteredCity}
        showList={showList}
      />
      <CustomButton onClick={onLoadHandler}>load</CustomButton>
    </div>
  )
}

export default CitySearch
