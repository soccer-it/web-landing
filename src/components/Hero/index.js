import React, { useEffect } from "react"
import useMouseParallax from "utils/useMouseParallax"

import Typed from "typed.js"

// Style
import "./hero.scss"

// Components
import FloatIcons from "components/FloatIcons"

import appImage from "images/appWhite.svg"
import appVideo from "videos/appvideointro.mp4"

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
        <div className="video-wrapper" data-depth="0.1">
          <video width="100%" height="100%" className="image-featured" preload="auto" loop muted autoPlay playsInline>
            <source src={appVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero
