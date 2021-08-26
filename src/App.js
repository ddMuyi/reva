import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import Apps from './Apps'
import './App.css'
import SignUp from './signUp'
import MobileVerification from './mobileVerification'
import EmailVerification from './emailVerification'
import Login from './login'
import ResetPassword from './resetPassword'
import Verify from './transactionverification'



const App = () =>{  
  return (
    <div className="h-screen w-full h-full">
      <Router className="h-screen">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/apps" component={Apps}></Route>
          <Route exact path="/signup" component={SignUp}></Route>          
          <Route path='/mobileverification' component={MobileVerification}></Route>
          <Route path='/emailverification' component={EmailVerification}></Route>
          <Route path='/resetpassword' component={ResetPassword}></Route>
          <Route path='/verify' component={Verify}></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App