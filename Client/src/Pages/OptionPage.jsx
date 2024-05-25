import Container from "@/components/Container"
import {
    Card,
    CardTitle,
    
    CardHeader,
    
  } from "@/components/ui/card"
  import user from "../assets/user.jpg"
  import ngo from "../assets/ngo.jpg"
  import { Link } from "react-router-dom"
function OptionPage() {
  
  return (
    <Container>
        <div className="flex justify-center items-center gap-10 h-screen ]">
           <Card >
            <Link to="user/login">
            <CardTitle className="text-center pt-4 font-bold text-2xl">
               USER
            </CardTitle>
            <CardHeader>
               <img className="rounded-md" height={350} width={350} src={user} alt="userImage" />
            </CardHeader>
            </Link>
           </Card>
           <Card>
            <Link to="ngo">
           <CardTitle className="text-center pt-4 font-bold text-2xl">
               NGO 
            </CardTitle>
            <CardHeader>
                <img className="rounded-md" height={350} width={350} src={ngo} alt="" />
            </CardHeader>
            </Link>
           </Card>
        </div>
    </Container>
  )
}

export default OptionPage