import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.css'

const SideBar = () =>{
  const [open, setOpen] = React.useState(false)
  const toggleHandler=()=>{
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className={open? "sidebar" : "sidebar big-close"}>
      <div className="burger" onClick={()=>toggleHandler()}>
        <div className="line1 line"></div>
        <div className="line2 line"></div>
      </div>
      <ul className={open ? 'bar-list' : "bar-list trim"}>
        <li className="bar-item">
          <NavLink to="/" exact className="bar-link">
            <span><i className="fas fa-home"></i></span>
            <h6 className={open ? 'open' : 'close'}>Home</h6>
          </NavLink>
        </li>
        <li className="bar-item">
          <NavLink to='/transactions' className="bar-link">
            <span><i className="fas fa-history"></i></span>
            <h6 className={open ? 'open' : 'close'}>Transactions</h6>
          </NavLink>
        </li>
        <li className="bar-item">
          <NavLink to='/rate' className="bar-link">
            <span><i className="far fa-registered"></i></span>
            <h6 className={open ? 'open' : 'close'}>Rate</h6>
          </NavLink>
        </li>
        <li className="bar-item">
          <NavLink to='/profile' className="bar-link">
            <span><i className="fas fa-user"></i></span>
            <h6 className={open ? 'open' : 'close'}>Profile</h6>
          </NavLink>
        </li>
        <li className="bar-item">
          <NavLink to='/notifications' className="bar-link">
          <span><i className="fa fa-bell"></i></span>
            <h6 className={open ? 'open' : 'close'}>Notification</h6></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar