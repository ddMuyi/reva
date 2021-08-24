import Button from './components/buttons'
import Input from './components/Input'
import Container from './components/container'

const changePin = () =>{
  return (
    <Container>
      <h2 className="text-center text-orange-800 semibold text-xl">Change PIN</h2>
      <form action="" className="w-5/6 mx-auto">
        <div className="w-full">
          <label htmlFor="oldIN">Enter Old PIN</label>
          <Input id="oldPIN" name="oldPIN"></Input>
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="newPIN">Enter New PIN</label>
          <Input id="newPIN" name="newPIN"></Input>
        </div>
        <Button nameTag="Change pin"></Button>
      </form>
    </Container>
  )
}

export default changePin