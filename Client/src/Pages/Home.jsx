
import Container from "../components/Container";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
 
} from "@/components/ui/card"



function Home() {
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
              Get Involved
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
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="NGO Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Save the Children</h3>
                    <p className="text-gray-600 dark:text-gray-400">Empowering children in need worldwide.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="NGO Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Habitat for Humanity</h3>
                    <p className="text-gray-600 dark:text-gray-400">Building homes, communities, and hope.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="NGO Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Doctors Without Borders</h3>
                    <p className="text-gray-600 dark:text-gray-400">Providing medical care worldwide.</p>
                  </div>
                </CardContent>
              </Card>
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
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="Donor Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">The Giving Foundation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Empowering communities through philanthropy.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="Donor Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Charitable Foundations</h3>
                    <p className="text-gray-600 dark:text-gray-400">Investing in a better future for all.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <img
                    alt="Donor Logo"
                    className="rounded-full"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Philanthropic Collective</h3>
                    <p className="text-gray-600 dark:text-gray-400">Uniting donors to create lasting change.</p>
                  </div>
                </CardContent>
              </Card>
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
