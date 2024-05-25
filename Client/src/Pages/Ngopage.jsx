import Container from "@/components/Container"



import {
  Card,
  CardContent
} from "@/components/ui/card"

function Ngopage() {
  return (
    <Container>
       
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2 text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                Explore NGOs
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                Browse our directory of NGOs and find the ones that align with your interests and values.
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
                    <p className="text-gray-600 dark:text-gray-400">Location: New York, USA</p>
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
                    <p className="text-gray-600 dark:text-gray-400">Location: Atlanta, USA</p>
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
                    <p className="text-gray-600 dark:text-gray-400">Location: Geneva, Switzerland</p>
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">World Wildlife Fund</h3>
                    <p className="text-gray-600 dark:text-gray-400">Protecting the environment and wildlife.</p>
                    <p className="text-gray-600 dark:text-gray-400">Location: Gland, Switzerland</p>
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Oxfam International</h3>
                    <p className="text-gray-600 dark:text-gray-400">Fighting poverty and injustice worldwide.</p>
                    <p className="text-gray-600 dark:text-gray-400">Location: Oxford, UK</p>
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Amnesty International</h3>
                    <p className="text-gray-600 dark:text-gray-400">Defending human rights globally.</p>
                    <p className="text-gray-600 dark:text-gray-400">Location: London, UK</p>
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

export default Ngopage