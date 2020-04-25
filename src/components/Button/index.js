/* eslint-disable import/first */

import React from "react"

// Styles
import "./button.scss"

const Button = ({ text = "botão" }) => {
  return (
    <button className="button">
      <p className="text">{text}</p>
      <span className="icon arrow-right"></span>
    </button>
  )
}

export default Button
