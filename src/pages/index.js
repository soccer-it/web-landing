import React from "react"

import Structure from "components/Structure"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Structure>
    <SEO title="Home" />
    <div>
      <Image />
    </div>
  </Structure>
)

export default IndexPage
