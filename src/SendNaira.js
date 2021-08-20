import React from 'react'
import './sendNaira.css'

const SendNaira = () =>{
  return (
    <section className="send-naira">
      <h2>Send Naira</h2>
      <div className="form-container">
        <div className="cont">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="text" id="amount" name="amount"/>
        </div>
        <div className="cont">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC"/>
        </div>
        <button className="send">Send</button>
      </div>
    </section>
  )
}

export default SendNaira