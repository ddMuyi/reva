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
  
  
  return (
    <section className="">
      <h2 className="">Buy BTC</h2>
      <div className="">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="number" id="amount" name="amount" onChange={changeHandler} value={amount}/>
        </div>
        <div className="">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" onChange={btcChangeHandler} value={btcValue}/>
        </div>
        <button onClick={props.buyHandler} className="">Buy</button>
      </div>
    </section>
  )
}

export default Buy