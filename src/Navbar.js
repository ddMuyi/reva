import React from 'react'
import CompanyLogo from './logo.jpg'


const Navbar = (props) =>{
  return (
    <header className="">
      <section className="">
        <div className="">
          <img src={CompanyLogo} alt=""/>
        </div>
        <div className="">
          <div className="">
            <span><i className=""></i></span>
          </div>
          <h4 className="">{props.username}</h4>
        </div>
      </section>


      <section className="">
        <div className="">
          <span><i className = ""></i></span>
        </div>
      </section>
    </header>
  )
}

export default Navbar