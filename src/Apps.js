import React from 'react'
import Navbar from './Navbar'
import Sidebar from './sidebar'
import data from './data'
import Home from './home'
import BitcoinWallet from './bitcoinWallet'
import NairaWallet from './nairaWallet' 
import Transactions from './transactions'
import Notifications from './notification'
import Rate from './rate'
import Profile from './profile'
import BottomBar from './BottomNav'
import ChangePassword from './changePassword'
import ChangePin from './changePin'
import AddBankDetails from './AddBankDetails'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'


const Apps = () =>{
  const[datas, setDatas] = React.useState(data)
  const buyHandler = () =>{
    const balance = datas.wallet.bitcoin
    const amountOfBTCBuy = localStorage.getItem("AmountofBTCBuy")
    const newBalance = (Number(balance) + Number(amountOfBTCBuy)).toFixed(8)
    
    setDatas((prevData)=>{
      return {...prevData,  wallet:{bitcoin:newBalance, naira:145236}}
    })
  }

  const sellHandler = () =>{
    const BTCbalance= datas.wallet.bitcoin
    const NairaBalance = datas.wallet.naira
    

    const amountOfBTCSell = localStorage.getItem("AmountofBTCSell")
    const amountGain = localStorage.getItem("amountofBTCGain")
    const newBalance = (Number(BTCbalance) - Number(amountOfBTCSell)).toFixed(8)
    const newNairaBalance = (Number(NairaBalance) + Number(amountGain)).toFixed(2)

    setDatas((prevData)=>{
      return {...prevData, wallet:{bitcoin:newBalance, naira:newNairaBalance}}
    })
  }

  const transferHandler  =() =>{
    const BTCbalance = datas.wallet.bitcoin
    const nairaBalance = datas.wallet.naira
    const amountBTCTransfer = localStorage.getItem("amountBTCTransfer")
    const newBalance = (Number(BTCbalance) - Number(amountBTCTransfer)).toFixed(8)
    
    setDatas((prevData)=>{
      return {...prevData, wallet:{bitcoin:newBalance, naira:nairaBalance}}
    })
  }

  const depositor = () =>{
    const BTCBalance = datas.wallet.bitcoin
    const nairaBalance = datas.wallet.naira
    const deposited = localStorage.getItem('deposit')
    const newBalance = Number(nairaBalance) + Number(deposited)

    setDatas((prevData)=>{
      return {...prevData, wallet:{bitcoin:BTCBalance, naira:newBalance}}
    })
  }

  const [open, setOpen] = React.useState(false)
  const toggleHandler=()=>{
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className="w-full h-full">
      <Router>
      <Navbar username={datas.personal.username}/>
      
      <div className="flex h-5/6 w-full">
        <Sidebar open={open} toggleHandler={toggleHandler}/>        
        <Switch className="">
          <Route exact path='/apps' component={()=>{
            return <Home bitcoin = {datas.wallet.bitcoin} naira = {datas.wallet.naira}/>
          }}></Route>
          <Route exact path="/transactions" component={Transactions}></Route>
          <Route exact path="/notifications" component={Notifications}></Route>
          <Route exact path="/rate" component={Rate}></Route>
          <Route exact path="/profile" component={()=>{
            return <Profile name={datas.personal.name} address={datas.personal.address} phoneNumber={datas.personal.phone} email={datas.personal.email}/>
          }}></Route>
          <Route path="/nairaWallet" component={()=>{
            return <NairaWallet depositor={depositor} naira={datas.wallet.naira}/>
          }}></Route>
          <Route path="/bitcoinWallet" component={()=>{
              return <BitcoinWallet wallet = {datas.wallet.bitcoin} buyHandler={buyHandler} sellHandler = {sellHandler} transferHandler={transferHandler} balance={datas.wallet.bitcoin}/>
            }}>
          </Route>
          <Route path='/profile/changepassword' component={ChangePassword}></Route>
          <Route path='/profile/changepin' component={ChangePin}></Route>
          <Route path='/profile/addbankdetails' component={AddBankDetails}></Route>
        </Switch>
      </div>
      <BottomBar/>
      </Router>
    </div>
  )
}

export default Apps