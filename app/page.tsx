import { Card, CitySearch } from '@/components'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  return (
    <Fragment>
      <CitySearch />
      <Card />
    </Fragment>
  )
}
