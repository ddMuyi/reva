import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.css'

const SideBar = () =>{
  const [open, setOpen] = React.useState(false)
  const toggleHandler=()=>{
    setOpen(!open)
    console.log(open)
  }

  const linkClasses='link flex items-center justify-start text-gray-100 w-full h-5/6 px-4 rounded'
  const listClasses = 'list flex items-center justify-center w-full h-full'
  return (
    <div className="bg-green-900 w-1/5 h-full hidden sm:flex">
      <ul className='filter w-full flex flex-col mx-auto h-2/4'>
        <li className={`${listClasses}`}>
          <NavLink to="/" exact className={`${linkClasses}`}>
            <span><i className="fas fa-home"></i></span>
            <h6 className="ml-4">Home</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/transactions' className={`${linkClasses}`}>
            <span><i className="fas fa-history"></i></span>
            <h6 className="ml-4">Transactions</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/rate' className={`${linkClasses}`}>
            <span><i className="fa fa-exchange"></i></span>
            <h6 className="ml-4">Rate</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/profile' className={`${linkClasses}`}>
            <span><i className="fas fa-user"></i></span>
            <h6 className="ml-4">Profile</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/notifications' className={`${linkClasses}`}>
          <span><i className="fa fa-bell"></i></span>
            <h6 className="ml-4">Notification</h6></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar