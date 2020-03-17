import React from "react"

// Components
import ContentBlock from "components/ContentBlock"

// Utils
import useMouseParallax from 'utils/useMouseParallax'

// Style
import "./headache.scss"

const Headache = () => {
  useMouseParallax(".parallax-headache")
  return (
    <section className="headache">
      <div className="container">
        <ContentBlock
          title={`<h1 class="title">faça parte <br /> do time </h1>`}
          customClass="parallax-headache"
          paragraphs={[
            "finalmente, uma plataforma que fala a sua língua e que te entende. Somos apaixonados por futebol, igual a você.",
            "sem complicações, o soccer.it funciona semelhante a um app, mas sem precisar instalar nada.",
          ]}
        />
        <div className="icon arrow-bottom"></div>
      </div>
    </section>
  )
}

export default Headache
