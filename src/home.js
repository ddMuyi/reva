import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = (props) =>{
  const nairaEquiv = (props.bitcoin * 14000000).toFixed(2)
  const dollarEquiv = (props.naira / 500).toFixed(2)

  return (
    <section className="w-full h-full sm:h-4/5 flex flex-col justify-around items-center mx-auto relative">
      <section className="w-4/5">
        <div className="text-green-800 font-semibold">
          <h3>Overview</h3>
        </div>

        <section className="wallets h-52 sm:h-24 sm:h-32 text-2xl sm:text-4xl font-semibold w-full flex flex-col sm:flex-row sm:justify-around gap-4 sm:gap-8 sm:items-center mt-4">
          <NavLink  to="/bitcoinWallet" className="filter shadow-md w-full sm:w-6/12 bg-orange-pattern bg-cover text-orange-100 sm:h-full h-24 text-center rounded-lg flex flex-col justify-center items-center">
              <h5><span className="span"><i className="fa fa-btc"></i></span>{props.bitcoin}</h5>
              <h5>{nairaEquiv}</h5>
          </NavLink>
          <NavLink  to="/nairaWallet" className="filter shadow-md w-full sm:w-6/12 bg-green-pattern bg-cover text-green-100 sm:h-full h-24 text-center rounded-lg flex flex-col justify-center items-center">
              <h5>NGN {props.naira}</h5>
              <h5>$ {dollarEquiv}</h5>
          </NavLink>
        </section>
      </section>

      <section className="w-4/5">
        <div className="flex h-12 items-center bg-light-green rounded-t-lg px-2 w-full">
          <h5 className="text-sm sm:text-md">Total Value</h5>
          <p className="text-xs ml-2">(BTC, Naira and Dollars)</p>
        </div>
        <div className="flex justify-around items-center bg-light-yellow h-20 rounded-b-lg">
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
          <h6 className="ml-2">Navigate to settings to setup your default Naira withdrawals bank account </h6>
        </div>
      </section>
    </section>
  )
}

export default Home