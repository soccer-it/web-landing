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
          title="sem dor de cabeça"
          paragraphs={[
            "Nada de baixar aplicativos que ocupam memória no seu celular e que você usa apenas um vez na vida.",
            "Soccerit é um site, que se comporta como um app. E sem esses problemas de memória, compatibilidade, e tempo de download.",
          ]}
        />
        <div className="icon arrow-bottom"></div>
      </div>
    </section>
  )
}

export default Headache
