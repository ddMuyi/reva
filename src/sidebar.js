import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.css'

const SideBar = ({open, toggleHandler}) =>{

  const appear = open ? 'flex ml-4' : 'hidden'
  const chevron = open ? 'fa-chevron-left' : 'fa-chevron-right'
  const width= open ? 'w-1/5' : 'w-1/12'

  const linkClasses=`link flex items-center ${open ? 'justify-start': 'justify-center'} text-gray-100 w-full h-5/6 px-4 rounded`
  const listClasses = 'sidebar list flex items-center justify-center w-full h-full'
  return (
    <div className={`bg-charcoal-primary ${width} h-full hidden sm:flex relative transition duration-300 ease-in-out`}>
      <div className="absolute w-8 h-8 bg-white rounded-full top-0 -right-4 flex border-green-800 border items-center justify-center" onClick={()=>{toggleHandler()}}>
        <span><i className={`fas ${chevron} text-green-800 text-lg`}></i></span>
      </div>

      <ul className='filter w-full flex flex-col mx-auto h-2/4'>
        <li className={`${listClasses}`}>
          <NavLink to="/apps/" exact className={`${linkClasses}`}>
            <span><i className="fas fa-home"></i></span>
            <h6 className={appear}>Home</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/transactions' className={`${linkClasses}`}>
            <span><i className="fas fa-history"></i></span>
            <h6 className={appear}>Transactions</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/rate' className={`${linkClasses}`}>
            <span><i className="fa fa-exchange"></i></span>
            <h6 className={appear}>Rate</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/profile' className={`${linkClasses}`}>
            <span><i className="fas fa-user"></i></span>
            <h6 className={appear}>Profile</h6>
          </NavLink>
        </li>
        <li className={`${listClasses}`}>
          <NavLink to='/notifications' className={`${linkClasses}`}>
          <span><i className="fa fa-bell"></i></span>
            <h6 className={appear}>Notification</h6></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar