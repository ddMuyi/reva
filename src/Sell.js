import React from 'react'

const Sell = (props) =>{
  const [sellAmount, setSellAmount] = React.useState('')
  const sellHandler=(e)=>{
    setSellAmount(e.target.value)
  }

  const returnToNaira = (e) =>{
    setSellAmount(Number(e.target.value * 14000000).toFixed(8))
  }

  const equivBTC = `${Number(sellAmount / 14000000).toFixed(8)}`

  React.useEffect(()=>{
    localStorage.setItem("AmountofBTCSell", equivBTC)
    localStorage.setItem("amountofBTCGain", sellAmount)
  }, [equivBTC,sellAmount])

  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-xl text-orange-800">Sell BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="text" id="amount" name="amount" onChange={sellHandler} value={sellAmount} className={`${inputClasses}`}/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" onChange={returnToNaira} value={equivBTC} className={`${inputClasses}`}/>
        </div>
        <button className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm" onClick = {props.sellHandler}>sell</button>
      </div>
    </section>
  )
}

export default Sell