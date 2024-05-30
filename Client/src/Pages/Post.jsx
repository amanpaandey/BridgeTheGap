/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";


import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPosts } from "@/store/postSlice";
import NgoPostCard from "@/components/NgoPostCard";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Post() {
  const [data, setData] = useState([]);

  const ngoAuth = useSelector((state => state.ngoAuth.status));

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/post/get-all-posts"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  dispatch(addPosts(data));
  console.log(data);

  return data?.data ? (
    <Container>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6 space-y-6'>
            <div className='space-y-2 text-center mb-20'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200'>
                NGO Posts
              </h2>
              <p className='max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl'>
                View the latest updates and proof of work from our featured
                NGOs.
              </p>
              {ngoAuth && <div className='flex justify-end'>
                  <Link to='/post/create'>
                    <Button>Create Post</Button>
                  </Link>
    
            </div>}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {data?.data.map((item) => (
               
                <NgoPostCard key={item._id} data={item} />

              ))}
            </div>
          </div>
        </section>
      </main>
    </Container>
  ) : null;
}



export default Post;
