import React from "react"

// Style
import "./explanation.scss"

import appDark from "images/appDark.svg"

const Explanation = () => {
  return (
    <div className="explanation">
      <section className="explanation">
        <div className="container">
          <h1 className="title">
            feito de torcedor <br /> para torcedor
          </h1>
          <div className="content">
            <p className="paragraph">
              Aqui no soccerit, é tudo feito por torcedores e para torcedores.
              Sem enrolação e rodeio, é tudo na lata.
            </p>
            <p className="paragraph">
              Com conteúdo totalmente personalidade e de acordo com o seu clube.
              E aqui tem clubismo sim!
            </p>
          </div>
        </div>
      </section>
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
      </section>
    </div>
  )
}

export default Explanation
