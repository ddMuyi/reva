import React from 'react'
import './btc-transfer.css'

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
    <section className="btc-transfer-cont">
      <h2>Transfer</h2>
      <div className="form-cont">
        <form  className="form" action="#">
          <div className="btc-amount">
            <label htmlFor="amount">Amount in BTC</label>
            <input type="text" id="amount" name="amount" onChange={changeHandler} value={amountBTCTransfer}/> <br/>
            <small>BTC Balance: {props.balance}</small>
          </div>

          <div className="equivNairaAmount">
            <label htmlFor="nairaAmount">Amount in Naira</label>
            <input type="text" id="nairaAmount" name="nairaAmount" onChange={()=>{}} value={convertedNaira}/>
          </div>

          <div className="reciep-wallet">
            <label htmlFor="address">Reciepient wallet ID</label>
            <input type="text" id="address" name="address"/>
          </div>

          <button className="transferBTC-btn" onClick={props.transferHandler}>Transfer</button>


        </form>
      </div>
    </section>
  )
}

export default Transfer