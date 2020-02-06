import React from "react"

// Style
import "./hero.scss"

import appImage from "images/appWhite.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">
          ser torcedor é <strong>cantar</strong>
        </h1>
        <img src={appImage} className="image-featured" />
      </div>
    </section>
  )
}

export default Hero
