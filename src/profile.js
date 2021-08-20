import react from 'react'
import './profile.css'

const Profile = ({name, email, phoneNumber, address}) =>{
  return (
    <section className="profile">
      <section className = "details-cont">
        <div className="details-title">
          <h6>Account-details</h6>
          <button>Edit</button>
        </div>
        <section className="details">
          <h5>Account Name : {name}</h5>
          <h5>Emial: {email}</h5>
          <h5>Phone Number: {phoneNumber}</h5>
          <h5>Address: {address}</h5>
        </section>
      </section>

      <section className="security">
        <div className="security-card">
          <div className="security-icon">
            <span><i className="fas fa-lock"></i></span>
          </div>
          <div className="security-text">
            Change Password
          </div>
        </div>


        <div className="security-card">
          <div className="security-icon">
            <span><i className="fas fa-piggy-bank"></i></span>
          </div>
          <div className="security-text">
            Edit Bank details
          </div>
        </div>


        <div className="security-card">
          <div className="security-icon">
            <span><i className="fas fa-key"></i></span>
          </div>
          <div className="security-text">
            Change Pin
          </div>
        </div>

      </section>
    </section>
  )
}

export default Profile