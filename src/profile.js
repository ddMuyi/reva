import react from 'react'

const Profile = ({name, email, phoneNumber, address}) =>{
  return (
    <section className="">
      <section className = "">
        <div className="">
          <h6>Account-details</h6>
          <button>Edit</button>
        </div>
        <section className="">
          <h5>Account Name : {name}</h5>
          <h5>Emial: {email}</h5>
          <h5>Phone Number: {phoneNumber}</h5>
          <h5>Address: {address}</h5>
        </section>
      </section>

      <section className="">
        <div className="">
          <div className="">
            <span><i className="fas fa-lock"></i></span>
          </div>
          <div className="">
            Change Password
          </div>
        </div>


        <div className="">
          <div className="">
            <span><i className="fas fa-piggy-bank"></i></span>
          </div>
          <div className="">
            Edit Bank details
          </div>
        </div>


        <div className="">
          <div className="">
            <span><i className="fas fa-key"></i></span>
          </div>
          <div className="">
            Change Pin
          </div>
        </div>

      </section>
    </section>
  )
}

export default Profile