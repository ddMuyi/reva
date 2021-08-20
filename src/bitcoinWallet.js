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
import './bitcoinwallet.css'

const TradeButtons = () =>{
  return (
    <div className="buttons">
          <NavLink to="/bitcoinWallet/transfer">
            <div className="trade-icon">
              <span><i class="fas fa-long-arrow-alt-up"></i></span>
            </div>
            <div className="trade-text">Transfer</div>
          </NavLink>
          <NavLink to="/bitcoinWallet/sell">
           <div className="trade-icon">
              <span><i class="fas fa-long-arrow-alt-up"></i></span>
            </div>
            <div className="trade-text">Sell</div>
          </NavLink>
          <NavLink to="/bitcoinWallet/buy">
            <div className="trade-icon">
              <span><i class="fas fa-long-arrow-alt-up"></i></span>
            </div>
            <div className="trade-text">Buy</div>
          </NavLink>
        </div>
  )
}

const BitcoinWallet = (props) =>{
  return (
    <div className="btc-wallet">
      <div className="btc-header">
        <h1>BitCoin Wallet</h1>
        <h3>{props.wallet}</h3>
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

      <NavLink to="/dashboard">
        <button>back</button>
      </NavLink>
    </div>
  )
}

export default BitcoinWallet