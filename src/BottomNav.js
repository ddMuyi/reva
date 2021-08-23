import React from 'react'
import {NavLink} from 'react-router-dom'

const BottomBar = () =>{
  const linkClasses = 'flex flex-col justify-center items-center h-full w-full rounded-lg'
  return (
    <div className="bg-green-50 w-full h-16 sm:hidden text-green-900 sticky bottom-0 left-0 border-t border-green-900">
      <ul className='flex justify-between align-center h-full w-full text-sm'>
        <li className="w-full h-full">
          <NavLink to='/transactions' className={`${linkClasses}`}>
            <span><i className="fas fa-history text-xl"></i></span>
            <h6 className="">History</h6>
          </NavLink>
        </li>
        <li className="w-full h-full">
          <NavLink to='/rate' className={`${linkClasses}`}>
            <span><i className="fa fa-exchange text-xl"></i></span>
            <h6 className="">Rate</h6>
          </NavLink>
        </li>
        <li className="w-full h-full">
          <NavLink to="/" exact className={`${linkClasses}`}>
            <span><i className="fas fa-home text-xl"></i></span>
            <h6 className="">Home</h6>
          </NavLink>
        </li>
        <li className="w-full h-full h-full">
          <NavLink to='/notifications' className={`${linkClasses}`}>
          <span><i className="fa fa-bell text-xl"></i></span>
            <h6 className="">Alerts</h6></NavLink>
        </li>
        <li className="w-full">
          <NavLink to='/profile' className={`${linkClasses}`}>
            <span><i className="fas fa-user text-xl"></i></span>
            <h6 className="">Account</h6>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default BottomBar