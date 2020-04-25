import React from "react"

// Style
import "./how-use.scss"

// Components
import Button from "components/Button"

import appDark from "images/appDark.svg"

const HowUse = () => {
  return (
    <section className="how-use background-featured" id="howuse">
      <div className="container">
        <div className="holder">
          <img src={appDark} className="image-featured" alt="" />
        </div>
        <div className="holder">
          <h1 className="subtitle">entre no jogo</h1>
          <ul className="list">
            <li className="item">
              <strong className="numeral">1</strong>
              <p className="paragraph">entre no site.</p>
            </li>
            <li className="item">
              <strong className="numeral">2</strong>
              <p className="paragraph">
                escolha o seu time de coração e cadastre-se.
              </p>
            </li>
            <li className="item">
              <strong className="numeral">3</strong>
              <p className="paragraph">
                salve o endereço na área de trabalho do seu celular.
              </p>
            </li>
            <li className="item">
              <strong className="numeral">4</strong>
              <p className="paragraph">
                pronto! É gol! A partir de agora, você receberá tudo de mais
                importante para torcer pelo seu time
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <Button text="comece a usar" />
        {/* <button className="button">
          comece a usar
          <span className="icon arrow-right"></span>
        </button> */}
      </div>
      <div className="fans-illustration"></div>
    </section>
  )
}

export default HowUse
