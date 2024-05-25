/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  
} from "@/components/ui/card"
import {getPosts} from "../store/postSlice"
import { useDispatch ,useSelector} from "react-redux"
import { useEffect } from "react"



function Post() {

  

  const dispatch = useDispatch();
  const postsData = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

 

  console.log(postsData);
  






  return (
    <Container>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2 text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                NGO Posts
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                View the latest updates and proof of work from our featured NGOs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Save the Children</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 2 hours ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're proud to share our latest initiative to provide educational resources to underprivileged
                      children in rural areas. Your support has made a significant impact!
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">123 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Habitat for Humanity</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 1 day ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're excited to share the completion of our latest housing project, providing safe and affordable
                      homes for families in need. Thank you for your continued support!
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">87 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Doctors Without Borders
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 3 days ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're grateful to have provided critical medical care to communities in need during the recent
                      natural disaster. Your support has made a real difference in people's lives.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">65 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">World Wildlife Fund</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 1 week ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're thrilled to share our latest conservation efforts, protecting endangered species and their
                      habitats. Your support is making a real impact on the environment.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">92 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Oxfam International</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 2 weeks ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're proud to share our latest initiative to provide essential aid and resources to communities
                      in need. Your generosity has made a lasting impact.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">78 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="NGO Logo"
                      className="rounded-full"
                      height={50}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width={50}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Amnesty International</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 1 month ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      We're grateful to have advocated for human rights and freedoms in various regions. Your support
                      has been instrumental in our efforts to create a more just world.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">104 likes</span>
                      </div>
                      <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                        Read more
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </Container>
  )
}


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
    )
  }

export default Post