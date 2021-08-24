import React from 'react'
import Button from './components/buttons'
import Input from './components/Input'

const SendNaira = () =>{
  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-orange-800 text-xl">Send Naira</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <Input type="text" name="amount"/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <Input type="text" name="amountBTC"/>
        </div>
        <Button nameTag="send"/>
      </div>
    </section>
  )
}

export default SendNaira