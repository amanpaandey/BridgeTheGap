import  Container  from "../Container";

import {ModeToggle} from "./ModeToggle"
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {logout} from "../../store/authSlice";

import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import {Ngologout as ngoLogout} from "../../store/NgoAuthSlice"




function Header() {

  
  
 const authS = useSelector((state) => state.auth);
  const navigate  =  useNavigate()

  const ngoStatus = useSelector((state) => state.ngoAuth);

  const authStatus = authS.status;
  

 
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name:"Explore Ngo's",
      slug:"/explore-ngo",
      active:true
    },
    {
      name:"Posts",
      slug:"/post",
      active:true
    },
    
    {
      name: "Login / Signup",
      slug: "/login",
      active: !authStatus  ,
    },
    {
      name: "Register as Ngo",
      slug: "/ngo-login",
      active: !ngoStatus.status ,
    },
   
    {
      name:"Profile",
      slug:`/profile/${authS?.userData?.data?.user?._id}`,
      active:authStatus
    },
    {
      name:"Profile",
      slug:`/ngo-profile/${ngoStatus?.ngoData?.data?.ngo?._id}`,
      active:ngoStatus.status
    }
  ];

  const dispatch = useDispatch()

  

  



  return (
    <Container>
      <nav className="flex justify-between text-3xl my-2 py-2 ">
        <div>
          { <Link to="/">logo</Link> }
        </div>
        <ul className="flex justify-between gap-6">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Button variant="default" onClick={() => navigate(item.slug)}>
                  {item.name}
                </Button>
              </li>
            ) : null
          )}
          {authStatus==true && (
            <li>
              <Button variant="default" onClick={(e) => {
                
               try {
                 e.preventDefault();
                 toast.success("Logged out successfully")
                 dispatch(logout())
                 
                 navigate("/")
               } catch (error) {
                toast.error("Couldn't log out")
               }
                }}>
                  Logout
                </Button>
            </li>
          )}
          {
            ngoStatus.status==true && (
              <li>
                <Button variant="default" onClick={(e) => {
                  
                 try {
                   e.preventDefault();
                   toast.success("Logged out successfully")
                   dispatch(ngoLogout())
                   
                   navigate("/")
                 } catch (error) {
                  toast.error("Couldn't log out")
                 }
                  }}>
                    Logout
                  </Button>
              </li>
            )}
          
          <li className=" pt-1">
            <ModeToggle/>
          </li>
        </ul>
      </nav>
      <Separator/>
    </Container>
    
  );
}

export default Header;
