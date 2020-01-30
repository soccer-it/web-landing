import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "components/Header"
import Footer from "components/Footer"

// Style
import "./structure.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
