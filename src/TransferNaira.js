import React from 'react'
import './transfernaira.css'

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
    <section className="transfer-naira">
      <h2 className="transfer-naira-title">Transfer naira</h2>
      <div className="form-cont">
        <form action="#">
          <div className="naira-withdrawal">
            <label htmlFor="amount">Amount you intend to withdraw</label>
            <input type="text" id="amount" name="amount" onChange={transferHandler} value={transferAmount}/>
          </div>

          {display === false ? <div className="naira-wallet-address">
            <button onClick={displayDefault} className="another">Send to another account</button>
            <button className="default-address">Send to default</button>
          </div> : ''}



          {display===true? <Default/> : ''}
        </form>
      </div>
    </section>
  )
}

const Default = ({setDisplay}) =>{
  return (
    <div className="default">
      <div className="cont">
        <label htmlFor="#">Bank Name</label>
        <input type="text"/>
      </div>

      <div className="cont">
        <label htmlFor="#">Account Number</label>
        <input type="text"/>
      </div>

      <div className="cont">
        <label htmlFor="#">Name</label>
        <input type="text"/>
      </div>
      <div className="default-buttons">
        <button className="default-secondary">Default</button>
        <button onClick={setDisplay} className="withdraw">Withdraw</button>
      </div>
    </div>
  )
}

export default TransferNaira