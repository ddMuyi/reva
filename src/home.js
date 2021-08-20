import React from 'react'
import {NavLink} from 'react-router-dom'
import './wallet.css'

const Home = (props) =>{
  const nairaEquiv = (props.bitcoin * 14000000).toFixed(2)
  const dollarEquiv = (props.naira / 500).toFixed(2)
  return (
    <section className="bigCont">
      <section id="wallets">
        <div className="overview">
          <h3>Oveview</h3>
        </div>

        <section className="wallets">
          <NavLink  to="/bitcoinWallet" className="btc">
            <div className="wallet">
              <span className="span"><i className="fa fa-btc"></i></span>
              <h5>B {props.bitcoin} sat</h5>
              <h5>NGN {nairaEquiv}</h5>
            </div>
          </NavLink>
          <NavLink  to="/nairaWallet" className="naira">
            <div className="wallet naira-text">
              <span className="span">#</span>
              <h5>NGN {props.naira}</h5>
              <h5>$ {dollarEquiv}</h5>
            </div>
          </NavLink>
        </section>
      </section>

      <section className="lead-balance">
        <div className="lead-title">
          <h5>Lead Balance</h5>
          <p>(This is the total balance in differenct denominations)</p>
        </div>
        <div className="lead-account">
          <div className="lead-btc bal">
            <h6>{props.bitcoin}</h6>
          </div>
          <div className="lead-naira bal">
            <h6>{props.naira}</h6>
          </div>
          <div className="lead-dollar bal">
            <h6>{props.bitcoin}</h6>
          </div>
        </div>
      </section>

      <section className="warning">
        <div className="warning-content">
          <span><i className="fas fa-exclamation-circle"></i></span>
          <h6>Navigate to settings to setup your default Naira withdrawals bank account </h6>
        </div>
      </section>
    </section>
  )
}

export default Home