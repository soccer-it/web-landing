import React from "react"

// Style
import "./what-to-use.scss"

const WhatToUse = () => {
  return (
    <section className="what-to-use">
      <div className="container">
        <h1 className="title">o que você pode usar</h1>
      </div>
      <ul className="list">
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de trasmissão</li>
      </ul>
      <ul className="list">
        <li className="item">notícias do seu time</li>
        <li className="item">curiosidades</li>
        <li className="item">informações do clube</li>
      </ul>
      <ul className="list">
        <li className="item">venda de ingressos</li>
        <li className="item">avisos de gol</li>
        <li className="item">newsletter</li>
      </ul>
    </section>
  )
}

export default WhatToUse
