import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <>
    <Toaster position="top-center"/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App
