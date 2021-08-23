import react from 'react'
import Input from './components/input'

const Profile = ({name, email, phoneNumber, address}) =>{
  const cardClasses="filter shadow-md bg-white w-1/4 h-auto text-center px-3 py-1 rounded text-sm sm:rounded-lg sm:text-md sm:py-4"
  return (
    <section className="w-full">
      <section className = "">
        <div className="mx-auto mt-8 w-4/5 sm:w-3/5 flex justify-between items-center">
          <h6>Account-details</h6>
          <button>Edit</button>
        </div>
        <Input>
          <div className="w-full px-4 h-auto">
            <h5 className="">Account Name : {name}</h5>
            <h5 className="mt-4">Emial: {email}</h5>
            <h5 className="mt-4">Phone Number: {phoneNumber}</h5>
            <h5 className="mt-4">Address: {address}</h5>
          </div>
        </Input>
      </section>

      <section className="w-4/5 sm:w-3/5 flex items-center justify-between mx-auto mt-8">
        <div className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-lock text-red-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Change Password
          </div>
        </div>


        <div className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-piggy-bank text-green-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Edit Bank details
          </div>
        </div>


        <div className={`${cardClasses}`}>
          <div className="">
            <span><i className="fas fa-key text-orange-700 text-2xl sm:text-4xl"></i></span>
          </div>
          <div className="mt-4">
            Change Pin
          </div>
        </div>

      </section>
    </section>
  )
}

export default Profile