import React from 'react'

const Button = ({increment, prefix, onClickFunction}) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return (
    <button onClick={handleClick}>
      {prefix}
      {increment}
    </button>
  )
}

export default Button
