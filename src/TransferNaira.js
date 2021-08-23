import React from 'react'

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
            <input type="text" id="amount" name="amount" onChange={transferHandler} value={transferAmount} className={`${inputClasses}`}/>
          </div>

          {display === false ? <div className="flex flex-col items-center h-auto">
            <button onClick={displayDefault} className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm">Send to another account</button>
            <button className="mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm">Send to default</button>
          </div> : ''}



          {display===true? <Default inputClasses={inputClasses} /> : ''}
        </form>
      </div>
    </section>
  )
}

const Default = ({setDisplay, inputClasses}) =>{
  return (
    <div>
      <div className="">
        <label htmlFor="#">Bank Name</label>
        <input type="text"/>
      </div>

      <div className="">
        <label htmlFor="#">Account Number</label>
        <input type="text" className={inputClasses}/>
      </div>

      <div className="">
        <label htmlFor="#">Name</label>
        <input type="text" className={inputClasses}/>
      </div>
      <div className="">
        <button className="">Default</button>
        <button onClick={setDisplay} className=" text-sm">Withdraw</button>
      </div>
    </div>
  )
}

export default TransferNaira