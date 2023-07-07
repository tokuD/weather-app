'use client'
import { RootState } from '@/app/store'
import { authActions } from '@/app/store/auth-slice'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from './CustomButton'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  const authState = useSelector((state: RootState) => state.authentication)
  const dispatch = useDispatch()

  const loginHandler = useCallback(() => {
    dispatch(
      authActions.login({ username: 'hoge', email: 'example@example.com' })
    )
  }, [dispatch])

  const logoutHandler = useCallback(() => {
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <header
      className="col-span-10 col-start-2 sticky top-0
     flex h-16 z-10 items-center justify-between
      bg-white py-1 px-2 border-b"
    >
      <h1 className="bg-gradient-to-r from-[#0D047A] to-[#00CAE3] bg-clip-text text-transparent text-4xl">
        <Link href="/">Weather App</Link>
      </h1>
      {authState.isAuthenticated ? (
        <CustomButton onClick={logoutHandler}>logout</CustomButton>
      ) : (
        <CustomButton onClick={loginHandler}>login</CustomButton>
      )}
    </header>
  )
}

export default Header
