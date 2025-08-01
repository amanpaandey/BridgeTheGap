import { Link } from "react-router-dom";
import Container from "@/components/Container";

import { useEffect, useState } from "react";
import NgoPostCard from "@/components/NgoPostCardProfile";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "@/constant";

function NgoPublicProfile() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      axios
       .get(`${API_BASE_URL}/api/v1/ngo/get-ngo/${id}`,{
         headers: { 'Content-Type': 'application/json' },
         withCredentials: true,
       })
       .then((res) => {
          setData(res.data);
          setLoading(false);
        })
       .catch((err) => {
          setError(err);
          setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    console.log(data);
  
    return (
      <Container>
      <main className="flex-1">
          <section className="w-full">
            <div className="container px-4 md:px-6  space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200">{
                  data?.data?.ngoName
                }</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden rounded-md">
                    <img
                      alt="NGO Logo"
                      className="absolute inset-0 w-full h-full object-cover"
                      height={100}
                      src={data?.data?.ngoAvatar}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width={200}
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">{ data?.data?.ngoDescription}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{ data?.data?.ngoAddress}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GlobeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <Link className="text-primary-500 hover:underline" href="#">
                          www.ngoname.org
                        </Link>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{data?.data?.ngoEmail}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      
                      <div className="flex items-center space-x-2">
                        <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{data?.data?.ngoPhone}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
                    About {
                      data?.data?.ngoName
                    }
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                   {
                    data?.data?.ngoDescription
                   }
                  </p>
                </div>
              </div>
            </div>
          </section>
  
  
  
  
  {/* posts section starts here  */}
  
  
  
  
  <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                  NGO Posts
                </h2>
                <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                  View the latest updates and proof of work from Save the Children.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  data?.data?.post.map((post) => <NgoPostCard avatar={data?.data?.ngoAvatar} name={data?.data?.ngoName} post={post} key={post._id} />)
                )}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                   
                  {
                    data?.data?.ngoName+"'s "
                  }
                  Gallery
                </h2>
                <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                  Explore our latest initiatives and projects through our image gallery.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                  alt="Gallery Image 6"
                  className="rounded-lg object-cover"
                  height={400}
                  src={data?.data?.ngoAvatar}
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </section>
        </main>
        </Container>
  )
}

export default NgoPublicProfile


function GlobeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  }
  
  
  
  
  
  
  
  
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function MapPinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
  
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }