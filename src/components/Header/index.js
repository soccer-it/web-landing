import { Link } from "gatsby"
import React from "react"

import logoImg from 'images/logo.svg'

const Header = () => (
  <header className="header">
    <img src={logoImg} alt="" />
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
  </header>
)

export default Header
