import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const CustomButton = (props: Props) => {
  const { children, onClick, className, type = 'button' } = props
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 bg-gradient-to-r from-[#4d2aaa] to-[#5a6de8] text-white rounded-[.2rem] hover:opacity-90 ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default CustomButton
