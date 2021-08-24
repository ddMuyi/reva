import React from 'react'
import Input from './components/Input'
import Button from './components/buttons'

const Sell = (props) =>{
  const [sellAmount, setSellAmount] = React.useState('')
  const sellHandler=(e)=>{
    setSellAmount(e.target.value)
  }

  const returnToNaira = (e) =>{
    setSellAmount(Number(e.target.value * 14000000).toFixed(8))
  }

  const equivBTC = `${Number(sellAmount / 14000000).toFixed(8)}`

  React.useEffect(()=>{
    localStorage.setItem("AmountofBTCSell", equivBTC)
    localStorage.setItem("amountofBTCGain", sellAmount)
  }, [equivBTC,sellAmount])

  return (
    <section className="filter shadow-md w-4/5 sm:w-96 h-auto py-6 mx-auto bg-white rounded-lg mt-4">
      <h2 className="text-center text-xl text-orange-800">Sell BTC</h2>
      <div className="w-5/6 mx-auto mt-4">
        <div className="">
          <label htmlFor="amount">Amount in Naira</label>
          <Input type="text" name="amount" onChange={sellHandler} value={sellAmount}/>
        </div>
        <div className="mt-4">
          <label htmlFor="amountBTC">Amount in BTC</label>
          <Input type="text" name="amountBTC" onChange={returnToNaira} value={equivBTC}/>
        </div>
        <Button onClick = {props.sellHandler} nameTag="Sell"/>
      </div>
    </section>
  )
}

export default Sell