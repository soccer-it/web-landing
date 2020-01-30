import React from "react"

import Structure from "components/Structure"
import Hero from "components/Hero"
import Explanation from "components/Explanation"
import Seo from "components/Seo"

const Home = () => (
  <Structure>
    <Seo title="Home" />
    <Hero />
    <Explanation />
  </Structure>
)

export default Home
