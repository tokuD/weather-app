'use client'
import store from '@/app/store'
import React from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
}

const StoreProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>
}

export default StoreProvider
