import React from 'react'
import CompanyLogo from './logo.jpg'


const Navbar = (props) =>{
  return (
    <header className="flex justify-between w-full h-20 sm:h-1/6 items-center px-8 border-gray-300 border-b">
      <section className="flex w-full sm:w-1/3 justify-between h-full items-center">
        <div className="w-20 sm:w-24 h-auto">
          <img src={CompanyLogo} alt="" className="w-full h-full"/>
        </div>
        <div className="flex items-center text-green-800">
          <span><i className="fas fa-user"></i></span>
          <h4 className="ml-4">{props.username}</h4>
        </div>
      </section>
      <div className="hidden sm:flex justify-center items-center text-orange-700">
        <span><i className = "fa fa-sign-out-alt text-2xl mr-4"></i></span>
        <p>Logout</p>
      </div>      
    </header>
  )
}

export default Navbar