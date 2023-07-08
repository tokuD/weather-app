import React from 'react'

type Props = {
  options: string[]
  setSelectHandler: (option: string) => void
  inputValue: string
  showList: boolean
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const AutoCompleteInput = (props: Props) => {
  const { options, setSelectHandler, inputValue, showList, onChangeHandler } =
    props
  return (
    <div className="relative" onClick={(event) => event.stopPropagation()}>
      <input
        type="text"
        className="border-b focus-within:outline-none p-2"
        placeholder="city"
        value={inputValue}
        onChange={onChangeHandler}
      />
      {showList && (
        <ul className="absolute bg-white w-full py-1 shadow max-h-60 overflow-y-scroll">
          {options.map((option, index) => (
            <li
              onClick={() => setSelectHandler(option)}
              className="hover:bg-slate-100 px-2 cursor-pointer"
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AutoCompleteInput
