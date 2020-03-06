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
          title={`<h1 class="title">feito de torcedor para torcedor</h1>`}
          paragraphs={[
            "aqui no soccerit, o clubismo é liberado! Respire o amor pelo seu time em todos os momentos e em qualquer lugar.",
            "conteúdo personalizado e simplificado. Sem consumir a memória do seu celular. Gratuito. É assim, na lata! Ou melhor, no ângulo!",
          ]}
        />
      </div>
    </section>
  )
}

export default Explanation
