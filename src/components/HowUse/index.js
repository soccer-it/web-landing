import React from "react"

// Style
import "./how-use.scss"

import appDark from "images/appDark.svg"

const HowUse = () => {
  return (
    <section className="how-use">
      <div className="container">
        <div className="holder">
          <img src={appDark} alt="" />
        </div>
        <div className="holder">
          <h1 className="title">
            como
            <br />
            usar
          </h1>
          <ul className="list">
            <li className="item">
              <strong className="numeral">1</strong>
              <p className="paragraph">entre no site.</p>
            </li>
            <li className="item">
              <strong className="numeral">2</strong>
              <p className="paragraph">
                salve na área de trabalho do seu celular.
              </p>
            </li>
            <li className="item">
              <strong className="numeral">3</strong>
              <p className="paragraph">use como um aplicativo nativo.</p>
            </li>
            <li className="item">
              <strong className="numeral">4</strong>
              <p className="paragraph">e sucesso!</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <button className="button">
          começar a usar
          <span className="icon arrow-right"></span>
        </button>
      </div>
      <div className="fans-illustration"></div>
    </section>
  )
}

export default HowUse
