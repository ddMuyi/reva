import SignInProgress from './components/signInProgress'
import Container from './components/container'
import Button from './components/buttons'
import Input from './components/Input'

const PinSetup =()=>{
  return (
    <div className="w-full">
      <SignInProgress bg1="bg-green-900" bg2="bg-green-900"/>
      <Container>
        <h2 className="text-center text-orange-800 font-semibold text-lg">Transaction PIN Setup</h2>
        <form className="w-full px-4 mt-4">
          <div>
            <label htmlFor="#">Pin</label>
            <Input/>
          </div>
          <div className="mt-4">
            <label htmlFor="#">Confirm Pin</label>
            <Input/>
          </div>
          <Button nameTag="set pin"/>
        </form>
      </Container>
    </div>
  )
}

export default PinSetup