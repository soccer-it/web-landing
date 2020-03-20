import React, { useState, useEffect } from "react"
import classNames from "classnames"
import Scrollbar from "smooth-scrollbar"

import Structure from "components/Structure"
import Hero from "components/Hero"
import Explanation from "components/Explanation"
import HowUse from "components/HowUse"
import Headache from "components/Headache"
import WhatToUse from "components/WhatToUse"
import Seo from "components/Seo"

// Utils
import isEven from "utils/isEven"

const Home = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  useEffect(() => {
    let scenes = []
    const controller = new window.ScrollMagic.Controller({
      refreshInterval: 0,
    })
    const sectionHeight = document
      .querySelector("#whattouse")
      .getBoundingClientRect().height
    const elements = document.querySelectorAll("#lists .list")

    elements.forEach((element, index) => {
      const scene = new window.ScrollMagic.Scene({
        triggerElement: "#whattouse",
        duration: sectionHeight,
      })
      scenes.push(scene)

      scene
        .setTween(
          window.TweenMax.to(element, 1, { x: isEven(index) ? 300 : -300 })
        )
        .addTo(controller)
    })

    const scrollbar = Scrollbar.init(
      document.querySelector("#gatsby-focus-wrapper .wrapper"),
      {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      }
    )

    scrollbar.addListener(() => {
      scenes.forEach(item => {
        item.refresh()
      })
    })
  }, [])

  return (
    <Structure
      className={classNames("wrapper", {
        "--opened": isMenuOpened,
      })}
      toggleMenu={setIsMenuOpened}
      isMenuOpened={isMenuOpened}
    >
      <Seo title="Home" />
      <Hero />
      <Explanation />
      <HowUse />
      <Headache />
      <WhatToUse />
    </Structure>
  )
}

export default Home
