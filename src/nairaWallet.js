import React from 'react'
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
  const linkClasses = 'flex h-full w-full items-center justify-center'
  return (
    <div className="filter shadow-lg w-4/5 sm:w-96 h-12 mx-auto bg-white flex items-center justify-between">
      <NavLink to="/nairawallet/transfernaira" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-up"></i></span>
        <div className="">Withdraw</div>
      </NavLink>
      <NavLink to="/nairawallet/sendnaira" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-right"></i></span>
        <div className="">Send</div>
      </NavLink>
      <NavLink to="/nairawallet/depositnaira" className={`${linkClasses}`}>
        <span><i class="fas fa-long-arrow-alt-down"></i></span>
        <div className="">Deposit</div>
      </NavLink>
    </div>
  )
}


const nairaWallet = (props) =>{
  return (
    <div className = "w-full">
      <div className="text-center">
        <h1 className="">NairaWallet</h1>
        <h3 className="">NGN {props.naira}</h3>
      </div>

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