import React from "react"

const ContentBlock = ({ title = "", paragraphs = [], customClass = "" }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      {paragraphs.map((item, index) => (
        <div className="holder" key={index}>
          <p className="paragraph" >
            {item}
          </p>
        </div>
      ))}
    </>
  )
}

export default ContentBlock
