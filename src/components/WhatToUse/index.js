import React, { useEffect } from "react"

// import { TimelineMax, TweenMax, Linear } from 'gsap';
// import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// Style
import "./what-to-use.scss"

const WhatToUse = () => {
  useEffect(() => {
    const controller = new window.ScrollMagic.Controller()

    const scene = new window.ScrollMagic.Scene({
      triggerElement: "#whattouse",
      duration: 300,
    })
      // animate color and top border in relation to scroll position
      .setTween(".list", {
        scale: 0.7,
      }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
      .addTo(controller)

    console.log("opa", scene)
  }, [])
  return (
    <section className="what-to-use" id="whattouse">
      <div className="container">
        <h1 className="title">recursor disponíveis</h1>
      </div>
      <ul className="list">
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de transmissão</li>
        <li className="item">notícias do seu time</li>
        <li className="item">curiosidades</li>
        <li className="item">informações do clube</li>
      </ul>
      <ul className="list">
        <li className="item">notícias do seu time</li>
        <li className="item">curiosidades</li>
        <li className="item">informações do clube</li>
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de transmissão</li>
      </ul>
      <ul className="list">
        <li className="item">venda de ingressos</li>
        <li className="item">avisos de gol</li>
        <li className="item">newsletter</li>
        <li className="item">venda de ingressos</li>
        <li className="item">avisos de gol</li>
        <li className="item">newsletter</li>
      </ul>
      <ul className="list">
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de transmissão</li>
        <li className="item">venda de ingressos</li>
        <li className="item">avisos de gol</li>
        <li className="item">newsletter</li>
      </ul>
      <ul className="list">
        <li className="item">notícias do seu time</li>
        <li className="item">curiosidades</li>
        <li className="item">informações do clube</li>
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de transmissão</li>
      </ul>
      <ul className="list">
        <li className="item">venda de ingressos</li>
        <li className="item">avisos de gol</li>
        <li className="item">newsletter</li>
        <li className="item">avisos de gol</li>
        <li className="item">escalação ao vivo</li>
        <li className="item">alertas de transmissão</li>
      </ul>
    </section>
  )
}

export default WhatToUse
