import React from 'react'

const SendNaira = () =>{
  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-orange-800 text-xl">Send Naira</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <input type="text" id="amount" name="amount" className={`${inputClasses}`}/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <input type="text" id="amountBTC" name="amountBTC" className={`${inputClasses}`}/>
        </div>
        <button className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm">Send</button>
      </div>
    </section>
  )
}

export default SendNaira