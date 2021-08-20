import React, {useEffect} from 'react'
import './buy.css'

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
    <section className="buy-btc">
      <h2 className="buy-title">Buy BTC</h2>
      <div className="form-container">
        <div className="amt-naira">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="number" id="amount" name="amount" onChange={changeHandler} value={amount}/>
        </div>
        <div className="amt-btc">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" onChange={btcChangeHandler} value={btcValue}/>
        </div>
        <button onClick={props.buyHandler} className="buy-btn">Buy</button>
      </div>
    </section>
  )
}

export default Buy