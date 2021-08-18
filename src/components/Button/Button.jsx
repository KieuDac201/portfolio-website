import React from 'react'
import './Button.scss'

const Button = ({ text, sm }) => {
  return (
    <button className={sm ? 'sm' : ''}>
      {text}
    </button>
  )
}

export default Button
