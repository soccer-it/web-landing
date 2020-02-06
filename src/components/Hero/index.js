import React, { useEffect } from "react"

import Typed from 'typed.js'

// Style
import "./hero.scss"

import appImage from "images/appWhite.svg"

const Hero = () => {
  useEffect(() => {
    console.log('oi')
    const typed = new Typed('.hero .featured-text', {
      strings: ["gritar", "torcer", "pular", 'xingar', "vibrar", "se exaltar", "ficar puto", "pistolar", "paixão"],
      typeSpeed: 50,
      typeSpeed: 80,
      backSpeed: 50,
      shuffle: true,
      backDelay: 3000,
      loop: true,
      showCursor: false
    });
  }, [])
  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">
          ser torcedor é <strong className="featured-text">cantar</strong>
        </h1>
        <img src={appImage} className="image-featured" />
      </div>
    </section>
  )
}

export default Hero
