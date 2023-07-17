import React from 'react'
import './head.css'

function Header() {
  return (
    <div>
      
      <header className="header">

<div className="logo">
    <img src="img/gym.png" alt=""/>
</div>

<nav>
    <ul className="navbar">
        <li><a href="#" className="active">First</a></li>
        <li><a href="#">Second</a></li>
        <li><a href="#">Third</a></li>
    </ul>
</nav>

<button className="btn">Contact Us</button>
</header>



    </div>
  )
}

export default Header
