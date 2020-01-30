import React from "react"

import Structure from "components/Structure"
import Hero from "components/Hero"
import Explanation from "components/Explanation"
import HowUse from "components/HowUse"
import Headache from "components/Headache"
import WhatToUse from "components/WhatToUse"
import Seo from "components/Seo"

const Home = () => (
  <Structure>
    <Seo title="Home" />
    <Hero />
    <Explanation />
    <HowUse />
    <Headache />
    <WhatToUse />
  </Structure>
)

export default Home
