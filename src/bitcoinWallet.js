import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import Transfer from './Transfer'
import Sell from './Sell'
import Buy from './Buy'
import Button from './components/buttons'

const TradeButtons = () =>{
  const linkClasses = 'filter flex h-full w-full items-center justify-center'
  return (
    <div className="nav filter shadow-lg w-4/5 sm:w-96 h-12 mt-4 mx-auto bg-white flex items-center justify-between">
      <NavLink to="/bitcoinWallet/transfer" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-up"></i></span>
        <div className="">Transfer</div>
      </NavLink>
      <NavLink to="/bitcoinWallet/sell" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-left"></i></span>
        <div className="">Sell</div>
      </NavLink>
      <NavLink to="/bitcoinWallet/buy" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-down"></i></span>
        <div className="">Buy</div>
      </NavLink>
    </div>
  )
}

const BitcoinWallet = (props) =>{
  return (
    <div className="w-full relative bg-light-yellow pt-4">
      <div className="text-center mt-4">
        <h1 className="text-xl font-semibold text-charcoal-dark">BitCoin Wallet</h1>
        <h3 className="text-lg text-charcoal-dark">{props.wallet}</h3>
      </div>

      <Router>
        <TradeButtons/>
        <Switch>
          <Route path="/bitcoinWallet/transfer" component={()=>{
            return <Transfer transferHandler={props.transferHandler} balance={props.balance}/>
          }}></Route>
          <Route path="/bitcoinWallet/sell" component={()=>{
            return <Sell sellHandler={props.sellHandler}/>
          }}></Route>
          <Route path="/bitcoinWallet/buy" component={()=>{
            return <Buy buyHandler={props.buyHandler}/>
          }}></Route>
        </Switch>
      </Router>

      <NavLink exact to="/apps" className="absolute top-0 right-0 bg-transparent">
        <Button nameTag='Back' width="w-12 mt-0"/>
      </NavLink>
    </div>
  )
}

export default BitcoinWallet