import React, { useEffect } from "react"
import useMouseParallax from "utils/useMouseParallax"

import Typed from "typed.js"

// Style
import "./hero.scss"

// Components
import FloatIcons from "components/FloatIcons"
import Phone from "components/Phone"

const Hero = () => {
  useEffect(() => {
    new Typed(".hero .featured-text", {
      strings: [
        "gritar",
        "cantar",
        "torcer",
        "pular",
        "xingar",
        "vibrar",
        "se exaltar",
        "ficar puto",
        "pistolar",
        "paixão",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      shuffle: true,
      backDelay: 3000,
      loop: true,
      showCursor: false,
    })
  }, [])

  useMouseParallax(".parallax-hero")

  return (
    <section className="hero">
      <FloatIcons />

      <div className="container parallax-hero">
        <h1 className="title" data-depth="0.2">
          ser torcedor <br />é <strong className="featured-text"> </strong>
        </h1>
          <Phone data-depth="0.1" />
      </div>
    </section>
  )
}

export default Hero
