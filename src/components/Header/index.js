import { Link } from "gatsby"
import React from "react"


// Images
import logoImg from "images/logo.svg"

// Styles
import './header.scss'

const Header = () => (
  <header className="header">
    <div className="container">
      <img src={logoImg} alt="Logo Soccerit" className="logo" />
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link to="/">o que é?</Link>
          </li>
          <li className="item">
            <Link to="/">por quê?</Link>
          </li>
          <li className="item">
            <Link to="/">ferramentas</Link>
          </li>
          <li className="item">
            <button className="button">
              Usar
              <span className="icon arrow-right"></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
