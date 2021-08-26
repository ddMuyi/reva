import Container from './components/container'
import Input from './components/Input'
import Button from './components/buttons'
import logo from './logo.jpg'
import forgot from './assets/forgot.svg'

const ResetPassword = ()=>{
  return (
    <div className="w-full h-full flex items-center relative justify-center bg-green-100">
      <div className="w-28 absolute top-8 left-8">
        <img src={logo} alt="logo" className="w-full"/>
      </div>
      <Container>
        <h2 className="text-center font-semibold text-lg text-orange-800">Reset Password</h2>
        <p className="text-center text-sm font-light">A link to reset your password would be sent to the provided email address</p>
        <div className="mt-4">
          <label className="text-sm">Enter your email address</label>
          <Input/>
        </div>
        <Button nameTag="send reset link"/>
      </Container>
      <div className="w-2/5 absolute bottom-0 right-0">
        <img src={forgot} alt="forgot" className="w-full"/>
      </div>
    </div>
  )
}

export default ResetPassword