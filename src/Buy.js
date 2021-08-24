import React, {useEffect} from 'react'
import Input from './components/Input'
import Button from './components/buttons'

const Buy = (props) =>{
  const [amount, setAmount] = React.useState('')
  const changeHandler=(e)=>{
    setAmount(e.target.value)
  }
  const btcChangeHandler = (e) =>{
    setAmount(`${Number(e.target.value * 14000000)}`)
  }


  const btcValue = `${(Number(amount) / 14000000).toFixed(8)}`
  useEffect(()=>{
    
    localStorage.setItem("AmountofBTCBuy", btcValue)
  }, [btcValue])
  
  
  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-xl text-orange-800">Buy BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <Input type="number" name="amount" onChange={changeHandler} value={amount}/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <Input type="text" id="amountBTC" name="amountBTC" onChange={btcChangeHandler} value={btcValue}/>
        </div>
        <Button onClick={props.buyHandler} nameTag="Buy"/>
      </div>
    </section>
  )
}

export default Buy