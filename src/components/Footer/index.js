import React from "react"

// Style
import "./footer.scss"

// Utils
import useMouseParallax from "utils/useMouseParallax"

const Footer = () => {
  useMouseParallax(".parallax-footer")
  return (
    <footer className="footer">
      <div className="container parallax-footer">
        <h1 className="title" data-depth="0.1">
          acesse o site e torça conosco
        </h1>
        <button className="button" data-depth="0.2">
          comece agora
          <span className="icon arrow-right"></span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
