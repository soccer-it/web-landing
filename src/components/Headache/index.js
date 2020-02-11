import React from "react"

// Components
import ContentBlock from "components/ContentBlock"

// Style
import "./headache.scss"

const Headache = () => {
  return (
    <section className="headache">
      <div className="container">
        <ContentBlock
          title="faça parte do time"
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
