import React from 'react'
import Input from './components/Input'
import Button from './components/buttons'

const DepositNaira = ({depositor}) =>{
  const [deposit, setDeposit] = React.useState(0)

  const depositHandler=(e)=>{
    setDeposit(e.target.value)
  }

  React.useEffect(()=>{
    localStorage.setItem('deposit', deposit)
  })
  
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-orange-800 text-xl">Deposit BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div>
          <label htmlFor="amount">Please Enter the amount you intend to deposit:</label>
          <Input type="text" name="amount" value={deposit} onChange={depositHandler}/>
        </div>
        <div className="">
          <h6>Here is your reva wallet address</h6>
          <h5>235689784512</h5>
        </div>
        <Button onClick={depositor} nameTag="Deposit"/>
      </div>
    </section>
  )
}

export default DepositNaira