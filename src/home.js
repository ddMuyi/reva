import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = (props) =>{
  const nairaEquiv = (props.bitcoin * 14000000).toFixed(2)
  const dollarEquiv = (props.naira / 500).toFixed(2)

  return (
    <section className="w-full h-4/5 flex flex-col justify-around items-center mx-auto relative">
      <section className="w-4/5">
        <div className="text-green-800 font-semibold">
          <h3>Overview</h3>
        </div>

        <section className="wallets h-24 sm:h-32 text-sm sm:text-2xl font-semibold w-full flex justify-around gap-4 items-center mt-4">
          <NavLink  to="/bitcoinWallet" className="filter shadow-md w-6/12 sm:w-5/12 bg-orange-pattern bg-cover text-orange-100 h-full text-center rounded-lg flex flex-col justify-center items-center">
              <h5><span className="span"><i className="fa fa-btc"></i></span>{props.bitcoin}</h5>
              <h5>{nairaEquiv}</h5>
          </NavLink>
          <NavLink  to="/nairaWallet" className="filter shadow-md w-6/12 sm:w-5/12 bg-green-pattern bg-cover text-green-100 h-full  text-center rounded-lg flex flex-col justify-center items-center">
            <div className="">
              <h5>NGN {props.naira}</h5>
              <h5>$ {dollarEquiv}</h5>
            </div>
          </NavLink>
        </section>
      </section>

      <section className="w-4/5">
        <div className="flex h-12 items-center bg-light-green rounded-t-lg px-2 w-full">
          <h5 className="text-sm sm:text-md">Lead Balance</h5>
          <p className="text-xs">(This is the total balance in differenct denominations)</p>
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
          <h6 className="ml-4">Navigate to settings to setup your default Naira withdrawals bank account </h6>
        </div>
      </section>
    </section>
  )
}

export default Home