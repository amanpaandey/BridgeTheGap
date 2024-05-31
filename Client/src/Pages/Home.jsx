
import Container from "../components/Container";
import { Button } from "@/components/ui/button"


import { useState,useEffect } from "react";
import axios from "axios";
import NgoHomeCard from "@/components/Home/NgoHomeCard";
import { Link } from "react-router-dom";
import UserCard from "@/components/Home/UserCard";



function Home() {

  const [ngo, setNgo] = useState([]);
  const [donor, setDonor] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/ngo/top-three-ngos")
   .then((res) => {
     setNgo(res.data);
   });

   axios.get("http://localhost:8000/api/v1/users/get-latest-users")
   .then((res) => {
     setDonor(res.data);
   });
   }, []);

   
   
   
   



  return (
    <Container>
      
       <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 lg:mt-20 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-gray-200">
              Connecting NGOs and Donors
            </h1>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400 text-lg md:text-xl">
              Our platform empowers NGOs and donors to collaborate and make a lasting impact on communities in need.
            </p>
            <Button
              className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
              variant="default"
            >
              <Link to="/explore-ngo">
              Get Involved
              </Link>
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                Featured NGOs
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                Discover the inspiring work of our featured NGO partners.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {
              ngo?.data?.map((item) => (
                <Link  key={item._id} to={`/${item._id}`}>
                  <NgoHomeCard ngo={item}/>
                </Link>
                 
              ))
             }
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                Featured Donors
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                Discover the generous donors making a difference with us.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                donor?.data?.map((item) => (
                  <Link  key={item._id} to={`/${item._id}`}>

                   <UserCard user={item}/>
                  </Link>
                ))
              }
             
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
              Join the Movement
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400 text-lg md:text-xl">
              Become a part of our mission to connect NGOs and donors for sustainable impact.
            </p>
            <Button
              className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
              variant="default"
            >
              Get Involved
            </Button>
          </div>
        </section>
      </main>
        
    </Container>
  )
}

export default Home
