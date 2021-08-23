import React from 'react'

const Transfer = (props)=>{
  const [amountBTCTransfer, setAmountBTCTransfer] = React.useState('')

  const changeHandler=(e)=>{
    setAmountBTCTransfer(e.target.value)
  }

  const convertedNaira = Number(amountBTCTransfer * 14000000)

  React.useEffect(()=>{
    localStorage.setItem("amountBTCTransfer", amountBTCTransfer)
  },[amountBTCTransfer])

  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'

  return (
    <section className="filter shadow-md mx-auto h-auto w-4/5 sm:w-96 bg-white mt-4 py-6 rounded-lg">
      <h2 className="text-center text-orange-800 semibold text-xl">Transfer</h2>
      <div className="w-5/6 mx-auto">
        <form  className="w-full h-full" action="#">
          <div className="w-full">
            <label htmlFor="amount">Amount in BTC</label>
            <input type="text" id="amount" name="amount" onChange={changeHandler} value={amountBTCTransfer} className={`${inputClasses}`}/> <br/>
            <small className="ml">BTC Balance: {props.balance}</small>
          </div>

          <div className="mt-4">
            <label htmlFor="nairaAmount">Amount in Naira</label>
            <input type="text" id="nairaAmount" name="nairaAmount" onChange={()=>{}} value={convertedNaira} className={`${inputClasses}`}/>
          </div>

          <div className="mt-4">
            <label htmlFor="address">Reciepient wallet ID</label>
            <input type="text" id="address" name="address" className={`${inputClasses}`}/>
          </div>

          <button className="mt-4 w-full bg-green-800 text-gray-50 h-8 uppercase text-sm" onClick={props.transferHandler}>Transfer</button>


        </form>
      </div>
    </section>
  )
}

export default Transfer