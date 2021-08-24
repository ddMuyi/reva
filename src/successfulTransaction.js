import Container from './components/container'
import success from './assets/success.svg'

const SuccessfulTransaction = () =>{
  return (
    <Container>
      <div className="w-5/6 mx-auto">
        <div className="w-full h-auto">
          <img src={success} alt="success" className="w-full h-auto"/>
        </div>
        <p className="text-center w-4/6 text-600">Transaction completed. Click <span className="text-green-900">here to go back to your wallet</span></p>
      </div>      
    </Container>
  )
}

export default SuccessfulTransaction