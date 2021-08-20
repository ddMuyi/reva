import React from 'react'
import './sell.css'

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


  return (
    <section className="sell">
      <h2>Sell BTC</h2>
      <div className="form-container">
        <div className="naira-input">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="text" id="amount" name="amount" onChange={sellHandler} value={sellAmount}/>
        </div>
        <div className="btc-input">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" onChange={returnToNaira} value={equivBTC}/>
        </div>
        <button className="sell-btn"onClick = {props.sellHandler}>sell</button>
      </div>
    </section>
  )
}

export default Sell