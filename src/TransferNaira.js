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
  return (
    <section className="">
      <h2 className="">Transfer naira</h2>
      <div className="">
        <form action="#">
          <div className="">
            <label htmlFor="amount">Amount you intend to withdraw</label>
            <input type="text" id="amount" name="amount" onChange={transferHandler} value={transferAmount}/>
          </div>

          {display === false ? <div className="">
            <button onClick={displayDefault} className="">Send to another account</button>
            <button className="">Send to default</button>
          </div> : ''}



          {display===true? <Default/> : ''}
        </form>
      </div>
    </section>
  )
}

const Default = ({setDisplay}) =>{
  return (
    <div className="">
      <div className="">
        <label htmlFor="#">Bank Name</label>
        <input type="text"/>
      </div>

      <div className="">
        <label htmlFor="#">Account Number</label>
        <input type="text"/>
      </div>

      <div className="">
        <label htmlFor="#">Name</label>
        <input type="text"/>
      </div>
      <div className="">
        <button className="">Default</button>
        <button onClick={setDisplay} className="">Withdraw</button>
      </div>
    </div>
  )
}

export default TransferNaira