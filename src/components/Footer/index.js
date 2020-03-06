import React from "react"

// Style
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="title">acesse o site e torça conosco</h1>
        <button className="button">
          comece agora
          <span className="icon arrow-right"></span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
