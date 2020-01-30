import React from "react"

const ContentBlock = ({ title = "", paragraphs = [], customClass = "" }) => {
  return (
    <section className={customClass}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="content">
          {paragraphs.map((item, index) => (
            <p className="paragraph" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentBlock
