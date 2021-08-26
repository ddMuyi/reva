import SignInProgress from './components/signInProgress'
import Button from './components/buttons'
import Input from './components/Input'
import Container from './components/container'

const SignUp = () =>{
  return (
    <div className="w-full h-full bg-light-green border-white border-t">
      <SignInProgress bg1="bg-green-900"></SignInProgress>
      <Container>
        <h2 className="text-center font-semibold text-orange-800">Register</h2>
        <form action="#" className="w-full px-4">
          <div>
            <label>First Name</label>
            <Input/>
          </div>
          <div className="mt-2">
            <label>Last Name</label>
            <Input/>
          </div>
          <div className="mt-2">
            <label>Phone Number</label>
            <Input/>
          </div>
          <div className="mt-2">
            <label>Email Address</label>
            <Input/>
          </div>
          <div className="mt-2">
            <label>Contact Address</label>
            <Input/>
          </div>
          <div className="mt-2">
            <label>Password</label>
            <Input/>
          </div>
          <Button nameTag="signup"/>
        </form>
      </Container>
    </div>
  )
}

export default SignUp