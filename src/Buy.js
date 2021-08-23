import React, {useEffect} from 'react'

const Buy = (props) =>{
  const [amount, setAmount] = React.useState('')
  const changeHandler=(e)=>{
    setAmount(e.target.value)
  }
  const btcChangeHandler = (e) =>{
    setAmount(`${Number(e.target.value * 14000000)}`)
  }


  const btcValue = `${(Number(amount) / 14000000).toFixed(8)}`
  useEffect(()=>{
    
    localStorage.setItem("AmountofBTCBuy", btcValue)
  }, [btcValue])
  
  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-xl text-orange-800">Buy BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="number" id="amount" name="amount" onChange={changeHandler} value={amount} className={`${inputClasses}`}/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" onChange={btcChangeHandler} value={btcValue} className={`${inputClasses}`}/>
        </div>
        <button onClick={props.buyHandler} className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm">Buy</button>
      </div>
    </section>
  )
}

export default Buy