import react from 'react'
import Container from './components/container'
import {NavLink} from 'react-router-dom'

const Profile = ({name, email, phoneNumber, address}) =>{
  const cardClasses="filter shadow-md bg-white w-3/6 sm:w-2/6 h-auto py:4 px-4 text-center sm:px-3 sm:py-1 rounded text-sm sm:rounded-lg sm:text-md sm:py-4"
  return (
    <section className="w-full">
      <section className = "w-full">
        <div className="mx-auto mt-8 text-sm w-4/5 sm:w-3/5 sm:text-base flex justify-between items-center">
          <h6>Account-details</h6>
          <button class="border-green-800 border rounded-sm px-4 hover:bg-green-500 hover:text-white">Edit</button>
        </div>
        <Container width="sm:w-3/5">
          <div className="w-full px-4 h-auto text-sm">
            <h5 className="">Account Name : {name}</h5>
            <h5 className="mt-4">Emial: {email}</h5>
            <h5 className="mt-4">Phone Number: {phoneNumber}</h5>
            <h5 className="mt-4">Address: {address}</h5>
          </div>
        </Container>
      </section>

      <section className="w-4/5 sm:w-3/5 text-sm sm:text-base flex gap-4 items-center justify-between mx-auto mt-8">
        <NavLink to="/profile/changepassword" className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-lock text-red-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Change Password
          </div>
        </NavLink>


        <NavLink to="/profile/addbankdetails" className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-piggy-bank text-green-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Edit Bank details
          </div>
        </NavLink>


        <NavLink to="/profile/changepin" className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-key text-orange-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Change Pin
          </div>
        </NavLink>

      </section>
    </section>
  )
}

export default Profile