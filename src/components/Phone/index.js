import React from "react"
import classNames from "classnames"

// Style
import "./Phone.scss"

import appVideo from "videos/appvideointro.mp4"

const Hero = ({ dark }) => {
  return (
    <div className="video-wrapper">
      <div
        className={classNames("phone", {
          ["-dark"]: dark,
        })}
      >
        <div className="screen">
          <video
            width="100%"
            height="100%"
            className="image-featured"
            preload="auto"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={appVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero
