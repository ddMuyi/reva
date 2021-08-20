import React from 'react'
import {NavLink} from 'react-router-dom'

const SideBar = () =>{
  const [open, setOpen] = React.useState(false)
  const toggleHandler=()=>{
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className="">
      <div className="" onClick={()=>toggleHandler()}>
        <div className=""></div>
        <div className=""></div>
      </div>
      <ul className=''>
        <li className="">
          <NavLink to="/" exact className="">
            <span><i className="fas fa-home"></i></span>
            <h6 className="">Home</h6>
          </NavLink>
        </li>
        <li className="">
          <NavLink to='/transactions' className="">
            <span><i className="fas fa-history"></i></span>
            <h6 className="">Transactions</h6>
          </NavLink>
        </li>
        <li className="">
          <NavLink to='/rate' className="">
            <span><i className="far fa-registered"></i></span>
            <h6 className="">Rate</h6>
          </NavLink>
        </li>
        <li className="">
          <NavLink to='/profile' className="">
            <span><i className="fas fa-user"></i></span>
            <h6 className="">Profile</h6>
          </NavLink>
        </li>
        <li className="">
          <NavLink to='/notifications' className="">
          <span><i className="fa fa-bell"></i></span>
            <h6 className="">Notification</h6></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar