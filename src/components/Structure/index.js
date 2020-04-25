import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "components/Header"
import Footer from "components/Footer"

// Utils
import { isMobile } from "utils/isMobile"

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

  useEffect(() => {
    if (isMobile()) return

    const mainEl = document.querySelector(".main")
    const element = document.querySelector(".blend")
    if (!element && mainEl) return

    mainEl.addEventListener("mousemove", e => {
      e.preventDefault()
      const { pageX, pageY } = e
      element.style.transform = `translate(${pageX - 38}px, ${pageY - 39.5}px)`
    })
  }, [])

  return (
    <>
      <div className="blend"></div>
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
    </>
  )
}

export default Layout
