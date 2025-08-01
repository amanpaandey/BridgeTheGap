import  { useState, useEffect } from "react";
import axios from "axios";
import Container from "@/components/Container";
import NgoCard from "@/components/NgoCard";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "@/constant";


export default function Ngopage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/v1/ngo/get-all-ngos`
        );
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No NGOs found.</div>;
  }

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
                Browse our directory of NGOs and find the ones that align with
                your interests and values.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.data?.map((ngo) => (
                
                  <Link key={ngo._id} to={`/${ngo._id}`}>
                    <NgoCard  ngo={ngo} />
                  </Link>
                
              ))}
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
