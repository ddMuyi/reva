import React from 'react'
import Input from './components/Input'
import Button from './components/buttons'

const Transfer = (props)=>{
  const [amountBTCTransfer, setAmountBTCTransfer] = React.useState('')

  const changeHandler=(e)=>{
    setAmountBTCTransfer(e.target.value)
  }

  const convertedNaira = Number(amountBTCTransfer * 14000000)

  React.useEffect(()=>{
    localStorage.setItem("amountBTCTransfer", amountBTCTransfer)
  },[amountBTCTransfer])

  return (
    <section className="filter shadow-md mx-auto h-auto w-4/5 sm:w-96 bg-white mt-4 py-6 rounded-lg">
      <h2 className="text-center text-orange-800 semibold text-xl">Transfer</h2>
      <div className="w-5/6 mx-auto">
        <form  className="w-full h-full" action="#">
          <div className="w-full">
            <label htmlFor="amount">Amount in BTC</label>
            <Input type="text" name="amount" onChange={changeHandler} value={amountBTCTransfer}/> <br/>
            <small className="mr-0">BTC Balance: {props.balance}</small>
          </div>

          <div className="mt-4">
            <label htmlFor="nairaAmount">Amount in Naira</label>
            <Input type="text" id="nairaAmount" name="nairaAmount" onChange={()=>{}} value={convertedNaira}/>
          </div>

          <div className="mt-4">
            <label htmlFor="address">Reciepient wallet ID</label>
            <Input type="text" name="address"/>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Button onClick={props.transferHandler} nameTag="Cancel" width="w-2/5"/>
            <Button onClick={props.transferHandler} nameTag="Transfer" width="w-2/5"/>
          </div>


        </form>
      </div>
    </section>
  )
}

export default Transfer