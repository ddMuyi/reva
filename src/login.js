import Container from './components/container'
import Input from './components/Input'
import Button from './components/buttons'
import loginImage from './assets/login-banner.svg'
import logo from './logo.jpg'

const Login = ()=>{
  return (
    <div className="w-full h-full flex justify-center relative bg-white">
      <div className="w-28 absolute top-8 left-8">
        <img src={logo} alt="logo" className="w-full"/>
      </div>
      <div className="banner hidden sm:w-1/2 h-full sm:flex justify-center items-center">
        <div className="sm:w-6/12 h-4/5">
          <img src={loginImage} alt="login banner" className="w-full h-full"/>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-auto sm:w-1/2 bg-light-green sm:rounded-tl-3xl sm:rounded-bl-3xl">
        <Container width="sm:w-4/5 md:w-4/5 lg:w-3/5">
          <form action="">
            <div className="">
              <label htmlFor="#">Email address</label>
              <Input/>
            </div>
            <div className="mt-4">
              <label htmlFor="#">Password</label>
              <Input/>
            </div>
            <div className="mt-4 flex justify-between sm:text-xs md:text-sm align-center text-sm">
              <label htmlFor=""><input type="checkbox" className="inline-block"/> Remember me</label>              
              <p className="text-orange-800">Forgot your password?</p>
            </div>
            <Button nameTag="Login"></Button>
            <p className="text-sm mt-6 text-center">Don't have an account with us? <span className="text-orange-800">Click here to signup</span></p>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Login