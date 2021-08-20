import React from 'react'

const SendNaira = () =>{
  return (
    <section className="">
      <h2>Send Naira</h2>
      <div className="">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="text" id="amount" name="amount"/>
        </div>
        <div className="">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC"/>
        </div>
        <button className="">Send</button>
      </div>
    </section>
  )
}

export default SendNaira