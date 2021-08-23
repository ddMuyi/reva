import React from 'react'

const DepositNaira = ({depositor}) =>{
  const [deposit, setDeposit] = React.useState(0)

  const depositHandler=(e)=>{
    setDeposit(e.target.value)
  }

  React.useEffect(()=>{
    localStorage.setItem('deposit', deposit)
  })
  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-orange-800 text-xl">Deposit BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div>
          <label htmlFor="amount">Please Enter the amount you intend to deposit:</label>
          <input type="text" id="amount" name="amount" value={deposit} onChange={depositHandler} className={`${inputClasses}`}/>
        </div>
        <div className="">
          <h6>Here is your reva wallet address</h6>
          <h5>235689784512</h5>
        </div>
        <button className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm" onClick={depositor}>Deposit</button>
      </div>
    </section>
  )
}

export default DepositNaira