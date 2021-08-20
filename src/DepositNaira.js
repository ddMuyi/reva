import React from 'react'

const DepositNaira = ({depositor}) =>{
  const [deposit, setDeposit] = React.useState(0)

  const depositHandler=(e)=>{
    setDeposit(e.target.value)
  }

  React.useEffect(()=>{
    localStorage.setItem('deposit', deposit)
  })
  return (
    <section className="">
      <h2>Deposit BTC</h2>
      <div className="">
        <div>
          <label htmlFor="amount">Please Enter the amount you intend to deposit:</label>
          <input type="text" id="amount" name="amount" value={deposit} onChange={depositHandler}/>
        </div>
        <div className="">
          <h6>Here is your reva wallet address</h6>
          <h5>235689784512</h5>
        </div>
        <button className="" onClick={depositor}>Deposit</button>
      </div>
    </section>
  )
}

export default DepositNaira