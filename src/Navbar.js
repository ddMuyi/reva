import React from 'react'
import CompanyLogo from './logo.jpg'
import './navbar.css'

const Navbar = (props) =>{
  return (
    <header className="header">
      <section className="left-nav">
        <div className="logo-cont">
          <img src={CompanyLogo} alt=""/>
        </div>
        <div className="user-cont">
          <div className="user-logoCont">
            <span><i className="fa fa-user"></i></span>
          </div>
          <h4 className="username">{props.username}</h4>
        </div>
      </section>


      <section className="right-nav">
        <div className="notification-cont">
          <span><i className = "fa fa-bell"></i></span>
        </div>
      </section>
    </header>
  )
}

export default Navbar