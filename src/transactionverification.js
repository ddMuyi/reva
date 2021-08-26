import Container from './components/container'
import Input from './components/Input'
import Button from './components/buttons'
import logo from './logo.jpg'


const Verify = ()=>{
  return (
    <div>
      <Container>
        <h2 className="text-center font-semibold text-lg text-orange-800">Transaction verification</h2>
        <p className="text-center text-xs text-gray-500">You have initiated the transfer of B 1.2354654 to the wallet Address uissuhycsr7w98y98rsd. Enter your security details to approve the transaction</p>
        <form action="#">
          <div className="mt-4">
            <Input innerButton="Send" placeholder="Enter your email OTP"></Input>
          </div>
          <div className="mt-4">
            <Input innerButton="Send" placeholder="Enter your mobile OTP"></Input>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter your Transaction PIN"></Input>
          </div>
          <div className="w-full flex justify-between align-center">
            <Button nameTag="cancel" width="w-2/5" text="text-green-800"></Button>
            <Button nameTag="approve" width="w-2/5" text="text-white" bg="bg-green-900"></Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Verify