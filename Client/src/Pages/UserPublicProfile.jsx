import Container from "@/components/Container"
import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardContent } from "@/components/ui/card"

import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import { API_BASE_URL } from "@/constant";
function UserPublicProfile() {

    const [loggedInuser, setloggedInuser] = useState("")

    const {id} = useParams();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/users/${id}`).then((res) => {
            setloggedInuser(res?.data?.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //console.log(loggedInuser);
  return (
    <Container>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 space-y-6 flex flex-col items-center">
            <div className="relative h-96 w-96 rounded-md overflow-hidden">
              <img
                src={loggedInuser?.avatar}
                alt="User Profile"
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {loggedInuser.fullname}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                @{loggedInuser.username}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {loggedInuser.email}
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                Liked Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loggedInuser?.likedPosts?.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/placeholder.svg"
                          width={50}
                          height={50}
                          alt="NGO Logo"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {post.ngo.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {post.createdAt}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Post Image"
                        className="rounded-lg object-cover"
                      />
                      <div className="mt-4 space-y-2">
                        <p className="text-gray-800 dark:text-gray-200">
                          {post.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon">
                              <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                              <span className="sr-only">Like</span>
                            </Button>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {post.likes} likes
                            </span>
                          </div>
                          <Link
                            href="#"
                            className="text-sm font-medium text-primary-500 hover:underline"
                            prefetch={false}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                Donated NGOs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loggedInuser?.donatedNGOs?.map((ngo, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/placeholder.svg"
                          width={50}
                          height={50}
                          alt="NGO Logo"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {ngo.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {ngo.location}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {ngo.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href="#"
                          className="text-sm font-medium text-primary-500 hover:underline"
                          prefetch={false}
                        >
                          Visit Website
                        </Link>
                        <Button variant="outline" size="sm">
                          Donate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default UserPublicProfile



function HeartIcon(props) {
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
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    );
  }