import React from "react"

// Components
import ContentBlock from "components/ContentBlock"

// Style
import "./explanation.scss"

const Explanation = () => {
  return (
    <section className="explanation background-featured" id="explanation">
      <div className="container">
        <ContentBlock
          title="feito de torcedor para torcedor"
          paragraphs={[
            "Aqui no soccerit, é tudo feito por torcedores e para torcedores. Sem enrolação e rodeio, é tudo na lata.",
            "Com conteúdo totalmente personalidade e de acordo com o seu clube. E aqui tem clubismo sim!",
          ]}
        />
      </div>
    </section>
  )
}

export default Explanation
