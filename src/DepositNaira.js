import React from 'react'
import './deposit.css'

const DepositNaira = ({depositor}) =>{
  const [deposit, setDeposit] = React.useState(0)

  const depositHandler=(e)=>{
    setDeposit(e.target.value)
  }

  React.useEffect(()=>{
    localStorage.setItem('deposit', deposit)
  })
  return (
    <section className="deposit-cont">
      <h2>Deposit BTC</h2>
      <div className="form-container">
        <div>
          <label htmlFor="amount">Please Enter the amount you intend to deposit:</label>
          <input type="text" id="amount" name="amount" value={deposit} onChange={depositHandler}/>
        </div>
        <div className="naira-account">
          <h6>Here is your reva wallet address</h6>
          <h5>235689784512</h5>
        </div>
        <button className="deposit-naira" onClick={depositor}>Deposit</button>
      </div>
    </section>
  )
}

export default DepositNaira