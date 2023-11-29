import React from 'react'
import logo from "../asset/1.jpg"
import "../component/header.css"

const Header = () => {
  return (
    <div>
      <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
    </div>
  )
}

export default Header
