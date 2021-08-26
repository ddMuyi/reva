import React from 'react'
import Input from './components/Input'
import Button from './components/buttons'

const TransferNaira = ()=>{
  const [transferAmount, setTransferAmount] = React.useState(0)
  const [display, setDisplay] = React.useState(false)
  const transferHandler = (e) =>{
    setTransferAmount(e.target.value)
  }

  const displayDefault = (e) =>{
    e.preventDefault()
    setDisplay(!display)
  }
  const inputClasses = 'w-full h-8 pl-4 border-gray-500 border'
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-orange-800 text-xl">Transfer naira</h2>
      <div className="w-5/6 mx-auto mt-4">
        <form action="#">
          <div className="mt-4">
            <label htmlFor="amount">Amount you intend to withdraw</label>
            <Input type="text" name="amount" onChange={transferHandler} value={transferAmount}/>
          </div>

          {display === false ? <div className="flex items-center justify-between h-auto">
            <Button onClick={displayDefault} nameTag="Send to another" text="text-green-900" width="w-2/6"/>
            <Button nameTag="Send to default" bg="bg-green-900" text="text-white" width="w-3/6"/>
          </div> : ''}



          {display===true? <Default/> : ''}
        </form>
      </div>
    </section>
  )
}

const Default = ({setDisplay}) =>{
  return (
    <div>
      <div className="">
        <label htmlFor="#">Bank Name</label>
        <Input type="text"/>
      </div>

      <div className="">
        <label htmlFor="#">Account Number</label>
        <Input type="text"/>
      </div>

      <div className="">
        <label htmlFor="#">Name</label>
        <Input type="text"/>
      </div>
      <div className="flex justify-between">
        <Button nameTag="Default" width="w-2/5" text="text-green-900"/>
        <Button onClick={setDisplay} nameTag="Withdraw" width="w-2/5" text="text-white" bg="bg-green-900"/>
      </div>
    </div>
  )
}

export default TransferNaira