import Container from "@/components/Container"
import { useSelector } from "react-redux"

function UserProfile() {

    const user = useSelector((state) => state.auth )

    
  return (
    <Container>

      <h1>hello from userprofile page </h1>
      <p>{

user?.userData?.data?.user?.username

}</p>
    </Container>
  )
}

export default UserProfile