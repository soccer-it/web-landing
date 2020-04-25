/* eslint-disable import/first */

import React from "react"

// Images
import Logo from "components/Logo"

// Styles
import "./header.scss"

// Components
import Hamburguer from "../Hamburguer"
import Button from 'components/Button'

const Header = ({ toggleMenu, isMenuOpened }) => {
  const goTo = (target, e) => {
    e.preventDefault()
    const element = document.querySelector(target)
    const SmoothScroll = require("smooth-scroll")
    const scroll = new SmoothScroll()
    toggleMenu(false)
    setTimeout(() => {
      scroll.animateScroll(element)
    }, 200)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="mobile-nav">
          <Logo />
          <Hamburguer toggleMenu={toggleMenu} isMenuOpened={isMenuOpened} />
        </div>
        <nav className="nav">
          <ul className="list">
            <li className="item">
              <a onClick={e => goTo("#explanation", e)}>o que é</a>
            </li>
            <li className="item">
              <a onClick={e => goTo("#howuse", e)}>como usar</a>
            </li>
            <li className="item">
              <a onClick={e => goTo("#whattouse", e)}>features</a>
            </li>
            <li className="item">
              <Button text="quero experimentar"/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
