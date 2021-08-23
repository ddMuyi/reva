import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = (props) =>{
  const nairaEquiv = (props.bitcoin * 14000000).toFixed(2)
  const dollarEquiv = (props.naira / 500).toFixed(2)
  return (
    <section className="w-full h-4/5 sm:w-4/5 flex flex-col justify-around items-center">
      <section className="w-4/5">
        <div className="">
          <h3>Overview</h3>
        </div>

        <section className="wallets h-24 sm:h-32 w-full flex justify-between items-center mt-4">
          <NavLink  to="/bitcoinWallet" className="filter shadow-md w-5/12 bg-orange-800 text-orange-100 h-full text-center rounded-lg flex flex-col justify-center items-center">
              <h5><span className="span"><i className="fa fa-btc"></i></span>{props.bitcoin}</h5>
              <h5>{nairaEquiv}</h5>
          </NavLink>
          <NavLink  to="/nairaWallet" className="filter shadow-md w-5/12 bg-green-800 text-green-100 h-full  text-center rounded-lg flex flex-col justify-center items-center">
            <div className="">
              <h5>NGN {props.naira}</h5>
              <h5>$ {dollarEquiv}</h5>
            </div>
          </NavLink>
        </section>
      </section>

      <section className="w-4/5">
        <div className="flex h-12 items-center bg-green-300 rounded-t-lg px-4">
          <h5>Lead Balance</h5>
          <p className="text-xs">(This is the total balance in differenct denominations)</p>
        </div>
        <div className="flex justify-around items-center bg-green-200 h-20 rounded-b-lg">
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

      <section className="w-4/5 text-center mt-4">
        <div className="flex justify-center items-center">
          <span><i className="fas fa-exclamation-circle text-red-800"></i></span>
          <h6 className="ml-4">Navigate to settings to setup your default Naira withdrawals bank account </h6>
        </div>
      </section>
    </section>
  )
}

export default Home