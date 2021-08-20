import React from 'react'
import {NavLink} from 'react-router-dom'

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
          <NavLink  to="/bitcoinWallet" className="">
            <div className="">
              <span className="span"><i className="fa fa-btc"></i></span>
              <h5>B {props.bitcoin} sat</h5>
              <h5>NGN {nairaEquiv}</h5>
            </div>
          </NavLink>
          <NavLink  to="/nairaWallet" className="">
            <div className="">
              <span className="">#</span>
              <h5>NGN {props.naira}</h5>
              <h5>$ {dollarEquiv}</h5>
            </div>
          </NavLink>
        </section>
      </section>

      <section className="">
        <div className="">
          <h5>Lead Balance</h5>
          <p>(This is the total balance in differenct denominations)</p>
        </div>
        <div className="">
          <div className="">
            <h6>{props.bitcoin}</h6>
          </div>
          <div className="">
            <h6>{props.naira}</h6>
          </div>
          <div className="">
            <h6>{props.bitcoin}</h6>
          </div>
        </div>
      </section>

      <section className="">
        <div className="">
          <span><i className="fas fa-exclamation-circle"></i></span>
          <h6>Navigate to settings to setup your default Naira withdrawals bank account </h6>
        </div>
      </section>
    </section>
  )
}

export default Home