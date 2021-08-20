import React from 'react'
import './nairawallet.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import TransferNaira from './TransferNaira'
import SendNaira from './SendNaira'
import DepositNaira from './DepositNaira'

const TradeButtons = () =>{
  return (
    <div className="buttons">
      <NavLink to="/nairawallet/transfernaira">
        <div className="trade-icon">
          <span><i class="fas fa-long-arrow-alt-up"></i></span>
        </div>
        <div className="trade-text">Withdraw</div>
      </NavLink>
      <NavLink to="/nairawallet/sendnaira">
        <div className="trade-icon">
          <span><i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
        <div className="trade-text">Send</div>
      </NavLink>
      <NavLink to="/nairawallet/depositnaira">
        <div className="trade-icon">
          <span><i class="fas fa-long-arrow-alt-down"></i></span>
        </div>
        <div className="trade-text">Deposit</div>
      </NavLink>
    </div>
  )
}

const nairaWallet = (props) =>{
  return (
    <div className = "naira-wallet">
      <h1 className="naira-wallet-header">NairaWallet</h1>
      <h3 className="naira-balance">NGN {props.naira}</h3>

      <Router>
        <TradeButtons/>
        <Switch>
          <Route path="/nairawallet/transfernaira" component={TransferNaira}></Route>
          <Route path="/nairawallet/sendnaira" component={SendNaira}></Route>
          <Route path="/nairawallet/depositnaira" component={()=>{
            return <DepositNaira depositor={props.depositor}/>
          }}></Route>
        </Switch>
      </Router>
      <NavLink to="/nairawallet">
        <button>back</button>
      </NavLink>
    </div>
  )
}

export default nairaWallet