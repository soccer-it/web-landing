import React from "react"

// Style
import "./hero.scss"

import appImage from 'images/appWhite.svg'

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">
        ser torcedor é <strong>cantar</strong>
      </h1>
      <img src={appImage} alt=""/>
    </div>
  )
}

export default Hero
