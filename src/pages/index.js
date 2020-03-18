import React, { useState } from "react"
import classNames from "classnames"

import Structure from "components/Structure"
import Hero from "components/Hero"
import Explanation from "components/Explanation"
import HowUse from "components/HowUse"
import Headache from "components/Headache"
import WhatToUse from "components/WhatToUse"
import Seo from "components/Seo"


const Home = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  
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
