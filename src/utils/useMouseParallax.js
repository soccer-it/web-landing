import { useState, useEffect } from "react"
import Parallax from 'parallax-js'

const useMouseParallax = selector => {
  const [parallaxInstance, setParallaxInstance] = useState(null)

  useEffect(() => {
    const scene = document.querySelector(selector)
    const parallaxInstance = new Parallax(scene)
    setParallaxInstance(parallaxInstance)
  }, [])

  return parallaxInstance
}

export default useMouseParallax
