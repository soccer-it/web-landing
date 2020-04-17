import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "components/Header"
import Footer from "components/Footer"

// Style
import "styles/index.scss"
import "./structure.scss"

const Layout = ({ children, className, toggleMenu, isMenuOpened }) => {
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
    <div className={className}>
      <div className="main">
        <Header
          siteTitle={data.site.siteMetadata.title}
          toggleMenu={toggleMenu}
          isMenuOpened={isMenuOpened}
        />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
