import React from "react"
import classNames from "classnames"

import "./content-block.scss"

const mountMarkup = element => {
  return {
    __html: element,
  }
}

const ContentBlock = ({ title = "", paragraphs = [], customClass = "" }) => {
  return (
    <div
      className={classNames("content-block", {
        [customClass]: customClass,
      })}
    >
      <div
        className="title-wrapper"
        dangerouslySetInnerHTML={mountMarkup(title)}
        data-depth="0.1"
      />
      {paragraphs.map((item, index) => (
        <div className="holder" data-depth="0.4" key={index}>
          <p className="paragraph">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentBlock
