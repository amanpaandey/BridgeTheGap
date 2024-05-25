import {LoginForm } from "../components/LoginForm"
import Container from "@/components/Container"
function Login() {
  return (
    <Container>
    <div className="flex justify-center items-center h-screen">
      <LoginForm/>
    </div>
    </Container>
    
  )
}

export default Login