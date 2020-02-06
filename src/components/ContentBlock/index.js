import React from "react"

const ContentBlock = ({ title = "", paragraphs = [], customClass = "" }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      {paragraphs.map((item, index) => (
        <div className="holder">
          <p className="paragraph" key={index}>
            {item}
          </p>
        </div>
      ))}
    </>
  )
}

export default ContentBlock
