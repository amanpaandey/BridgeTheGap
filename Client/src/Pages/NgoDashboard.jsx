import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"


const NgoDashboard = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
          NGO Dashboard
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
          Manage your &apos; activities, posts, donations, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Posts</h3>
              <div className="flex items-center gap-2">
                <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                  View All
                </Link>
                <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                  Add Post
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">New Education Initiative</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 2 hours ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Disaster Relief Update</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 1 day ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Housing Project Completion</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Posted 3 days ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Donations</h3>
              <div className="flex items-center gap-2">
                <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                  View All
                </Link>
                <Button size="sm" variant="primary">
                  Add Donation
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">John Doe</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">$100 - 2 days ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Jane Smith</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">$50 - 1 week ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Michael Johnson</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">$75 - 2 weeks ago</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Contact Queries</h3>
              <div className="flex items-center gap-2">
                <Link className="text-sm font-medium text-primary-500 hover:underline" href="#">
                  View All
                </Link>
                <Button size="sm" variant="primary">
                  Add Query
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Sarah Davis</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Inquiry about volunteer opportunities
                  </p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">David Lee</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Donation inquiry</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Emily Chen</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Partnership proposal</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}




function MoveHorizontalIcon(props) {
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
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    )
  }

export default NgoDashboard