import Button from './components/buttons'
import Input from './components/Input'
import Container from './components/container'

const AddBankDetails = () =>{
  return (
    <div className="w-full h-full">
      <Container>
      <h2 className="text-center text-orange-800 semibold text-xl">Add Bank Details</h2>
      <form action="#" className="w-full mx-auto">
        <div className="w-full mt-2">
          <label htmlFor="#">Bank Name</label>
          <Input type="text" name="bankname"></Input>
        </div>
        <div className="w-full mt-4">
          <label htmlFor="#">Account Number</label>
          <Input type="text" name="accountnumber"></Input>
        </div>
        <div className="w-full mt-4">
          <label htmlFor="#">Account Name</label>
          <Input type="text" name="accountname"></Input>
        </div>
        <Button nameTag="Save Bank Details"></Button>
      </form>
    </Container>
    </div>
  )
}

export default AddBankDetails