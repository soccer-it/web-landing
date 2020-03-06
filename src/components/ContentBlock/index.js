import React from "react"

import './content-block.scss'

const mountMarkup = element => {
  return {
    __html: element,
  }
}

const ContentBlock = ({ title = "", paragraphs = [], customClass = "" }) => {
  return (
    <div className="content-block">
      <div className="title-wrapper" dangerouslySetInnerHTML={mountMarkup(title)} />
      {paragraphs.map((item, index) => (
        <div className="holder" key={index}>
          <p className="paragraph">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentBlock
