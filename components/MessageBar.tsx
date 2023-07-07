'use client'
import { RootState } from '@/app/store'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const MessageBar = (props: Props) => {
  const msg = useSelector((state: RootState) => state.message)
  if (msg.status === 'nomessage') {
    return
  }
  let bgColor = ''
  let textColor = ''
  switch (msg.status) {
    case 'error':
      bgColor = 'bg-red-100'
      textColor = 'text-red-700'
      break
    case 'success':
      bgColor = 'bg-lime-100'
      textColor = 'text-lime-700'
      break
    case 'pending':
      bgColor = 'bg-blue-100'
      textColor = 'text-blue-700'
      break
    default:
      bgColor = 'bg-transparent'
      textColor = 'text-transparent'
  }
  return (
    <section
      className={`col-span-10 col-start-2 p-2 rounded-md shadow ${bgColor}`}
    >
      <p className={`${textColor}`}>{msg.message}</p>
    </section>
  )
}

export default MessageBar
