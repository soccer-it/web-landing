import React from "react"

import Structure from "../components/Structure"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Structure>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Structure>
)

export default NotFoundPage
