import Button from './components/buttons'
import Input from './components/Input'
import Container from './components/container'

const changePassword = () =>{
  return (
    <div className="w-full h-auto">
      <Container>
        <h2 className="text-center text-orange-800 semibold text-lg">Change Password</h2>
        <form action="" className="w-full mx-auto">
          <div className="w-full">
            <label htmlFor="oldPassword">Enter Old Password</label>
            <Input id="oldPassword" name="oldPassword"></Input>
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="newPassword">Enter New Password</label>
            <Input id="newPassword" name="newPassword"></Input>
          </div>
          <Button nameTag="Change Password"></Button>
        </form>
      </Container>
    </div>
  )
}

export default changePassword