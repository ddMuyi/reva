import SignInProgress from './components/signInProgress'
import Container from './components/container'
import Button from './components/buttons'
import Input from './components/Input'

const MobileVerification=()=>{
  return (
    <div className="w-full">
      <SignInProgress bg1="bg-green-900" bg2="bg-green-900" bg3="bg-green-900" bg4="bg-green-900"/>
      <Container>
        <h2 className="text-center text-orange-800 font-semibold text-lg">Mobile Verification</h2>
        <form action="#" className="px-4 mt-4">
          <Input innerButton="Send OTP"></Input>
          <Button nameTag="Confirm OTP"></Button>
        </form>
      </Container>
    </div>
  )
}

export default MobileVerification