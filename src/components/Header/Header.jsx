import React from 'react'
import "./Header.css"
import imgHeader from "../../assets/rick6.jpg"

const Header = () => {
  return (
    <div className='Header'>
        <img src={imgHeader} alt="imagen de rick and morty"/>
    </div>
  )
}

export default Header