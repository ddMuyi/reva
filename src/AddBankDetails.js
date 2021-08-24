import Button from './components/buttons'
import Input from './components/Input'
import Container from './components/container'

const AddBankDetails = () =>{
  return (
    <Container>
      <h2 className="text-center text-orange-800 semibold text-xl">Add Bank Details</h2>
      <form action="#" className="w-5/6 mx-auto">
        <div className="w-full ">
          <label htmlFor="#">Bank Name</label>
          <Input type="text" name="bankname"></Input>
        </div>
        <div className="w-full">
          <label htmlFor="#">Account Number</label>
          <Input type="text" name="accountnumber"></Input>
        </div>
        <div className="w-full">
          <label htmlFor="#">Account Name</label>
          <Input type="text" name="accountname"></Input>
        </div>
        <div className="w-full">
          <Button nametag="Save Bank Details"></Button>
        </div>
      </form>
    </Container>
  )
}

export default AddBankDetails