import React, { useEffect } from "react"

// import { TimelineMax, TweenMax, Linear } from 'gsap';
// import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// Style
import "./what-to-use.scss"
import isEven from "utils/isEven"

const WhatToUse = () => {
  useEffect(() => {
    const controller = new window.ScrollMagic.Controller()
    const sectionHeight = document
      .querySelector("#whattouse")
      .getBoundingClientRect().height
    const elements = document.querySelectorAll("#lists .list")

    elements.forEach((element, index) => {
      const scene = new window.ScrollMagic.Scene({
        triggerElement: "#whattouse",
        duration: sectionHeight,
      })

      scene
        .setTween(
          window.TweenMax.to(element, 1, { x: isEven(index) ? 300 : -300 })
        )
        .addTo(controller)
    })
  }, [])
  return (
    <section className="what-to-use" id="whattouse">
      <div className="container">
        <h1 className="title">recursor disponíveis</h1>
      </div>
      <div id="lists">
        <ul className="list" id="list1">
          <li className="item">avisos de gol</li>
          <li className="item">escalação ao vivo</li>
          <li className="item">alertas de transmissão</li>
          <li className="item">notícias do seu time</li>
          <li className="item">curiosidades</li>
          <li className="item">informações do clube</li>
        </ul>
        <ul className="list" id="list2">
          <li className="item">notícias do seu time</li>
          <li className="item">curiosidades</li>
          <li className="item">informações do clube</li>
          <li className="item">avisos de gol</li>
          <li className="item">escalação ao vivo</li>
          <li className="item">alertas de transmissão</li>
        </ul>
        <ul className="list" id="list3">
          <li className="item">venda de ingressos</li>
          <li className="item">avisos de gol</li>
          <li className="item">newsletter</li>
          <li className="item">venda de ingressos</li>
          <li className="item">avisos de gol</li>
          <li className="item">newsletter</li>
        </ul>
        <ul className="list" id="list4">
          <li className="item">avisos de gol</li>
          <li className="item">escalação ao vivo</li>
          <li className="item">alertas de transmissão</li>
          <li className="item">venda de ingressos</li>
          <li className="item">avisos de gol</li>
          <li className="item">newsletter</li>
        </ul>
        <ul className="list" id="list5">
          <li className="item">notícias do seu time</li>
          <li className="item">curiosidades</li>
          <li className="item">informações do clube</li>
          <li className="item">avisos de gol</li>
          <li className="item">escalação ao vivo</li>
          <li className="item">alertas de transmissão</li>
        </ul>
        <ul className="list" id="list6">
          <li className="item">venda de ingressos</li>
          <li className="item">avisos de gol</li>
          <li className="item">newsletter</li>
          <li className="item">avisos de gol</li>
          <li className="item">escalação ao vivo</li>
          <li className="item">alertas de transmissão</li>
        </ul>
      </div>
    </section>
  )
}

export default WhatToUse
