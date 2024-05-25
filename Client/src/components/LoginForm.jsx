import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useState } from "react"
import { useDispatch } from "react-redux"
import {login as authLogin} from "../store/authSlice"
import { useNavigate } from "react-router-dom"
import {toast} from "react-hot-toast"
import { Link } from "react-router-dom"


export function LoginForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value);
  };



  


  return (
    <Card className="w-full max-w-sm">
      
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Username</Label>
          <Input 
          value={username} 
          onChange={handleUsernameChange} id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input 
          value={password}
          onChange={handlePasswordChange} id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"
        onClick={(e)=>{
          e.preventDefault()
          dispatch(authLogin({username,password}))
          toast.success("Login Successfull")
          navigate("/")
        }}
        >Sign in</Button>
      </CardFooter>
      <div className="mb-2 text-center text-sm">
          Don&#39;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
    </Card>
  )
}
