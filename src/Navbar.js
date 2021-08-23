import React from 'react'
import CompanyLogo from './logo.jpg'


const Navbar = (props) =>{
  return (
    <header className="flex justify-between w-full h-16 sm:h-1/6 items-center px-8 border-gray-800 border-b">
      <section className="flex w-1/2 justify-between h-full items-center">
        <div className="w-16 sm:w-16 h-1/2">
          <img src={CompanyLogo} alt="" className="w-full h-full"/>
        </div>
        <div className="flex items-center text-green-800">
          <span><i className="fas fa-user"></i></span>
          <h4 className="ml-4">{props.username}</h4>
        </div>
      </section>
      <div className="flex justify-center items-center text-red-600">
        <span><i className = "fa fa-sign-out-alt text-2xl mr-4"></i></span>
        <p>Logout</p>
      </div>      
    </header>
  )
}

export default Navbar