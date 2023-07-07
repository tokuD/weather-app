import React from 'react'

type Props = {
  placeholder?: string
  type: React.HTMLInputTypeAttribute
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CustomInput = (props: Props) => {
  const { placeholder, type, onChange } = props
  return (
    <input
      className="py-2 px-3 border-b focus-visible:outline-none"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default CustomInput
