import React, { useEffect } from "react"
import SmoothScroll from 'smooth-scroll'

// Images
import logoImg from "images/logo.svg"

// Styles
import "./header.scss"

const Header = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]')
  }, [])
  return (
    <header className="header">
      <div className="container">
        <img src={logoImg} alt="Logo Soccerit" className="logo" />
        <div className="hamburguer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="16"
            width="21"
          >
            <g opacity="1">
              <g opacity="1">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  opacity="1"
                  fillRule="evenodd"
                  d="M18.29161305758531 0L2.708345438609769 0C2.317130573411686 0 2 0.4477192160079687 2 0.999970702838895C2 1.5522221896698212 2.317130573411686 2 2.708345438609769 2L18.29165456139023 2C18.682869426588315 2 19 1.5522807839920314 19 0.999970702838895C19 0.44766062168575865 18.682827922783392 0 18.29161305758531 0Z"
                />
              </g>
              <g opacity="1">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  opacity="1"
                  fillRule="evenodd"
                  d="M20.124933777017144 7L0.8750149535767735 7C0.39174953186149447 7 0 7.447706099490244 0 8C0 8.552293900509756 0.39174953186149447 9 0.8750149535767735 9L20.124985046423227 9C20.608250468138504 9 21 8.552293900509756 21 8C21 7.447706099490244 20.608199198732425 7 20.124933777017144 7Z"
                />
              </g>
              <g opacity="1">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  opacity="1"
                  fillRule="evenodd"
                  d="M18.29161305758531 14L2.708345438609769 14C2.317130573411686 14 2 14.447706099490246 2 15C2 15.552293900509754 2.317130573411686 16 2.708345438609769 16L18.29165456139023 16C18.682869426588315 16 19 15.552293900509754 19 15C19 14.447706099490246 18.682827922783392 14 18.29161305758531 14Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <nav className="nav">
          <ul className="list">
            <li className="item">
              <a  data-scroll href="#explanation">
                o que é?
              </a>
            </li>
            <li className="item">
              <a  data-scroll href="#howuse">
                como usar?
              </a>
            </li>
            <li className="item">
              <a  data-scroll href="#whattouse">
                features
              </a>
            </li>
            <li className="item">
              <button className="button">
                Usar
                <span className="icon arrow-right"></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
