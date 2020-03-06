import React from "react"
import classNames from "classnames"

// Style
import "./hamburguer.scss"

const Hamburguer = ({ isMenuOpened, toggleMenu }) => {
  return (
    <button
      className={classNames("hamburguer", {
        'is-active': isMenuOpened
      })}

      onClick={() => toggleMenu(!isMenuOpened)}
    ></button>
  )
}

export default Hamburguer
