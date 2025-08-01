import Container from "@/components/Container"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"
import { API_BASE_URL } from "@/constant";

function PostPage() {

  const params = useParams()
  const [post, setPost] = useState(null)

useEffect(() => {
  axios.get(`${API_BASE_URL}/api/v1/post/get-post/${params.id}`)
   .then(res => {
      setPost(res.data)
      console.log(res.data)
   })
   .catch(err => {
      console.log(err)
   })
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])



  return (
   
    <Container>
      <div className="w-full flex justify-center mt-10 mb-4 relative border rounded-xl p-2">
                <img
                        src={post?.data?.coverImage}
                        alt=""
                        className="rounded-xl"
                    />

                    
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post?.data?.title}</h1>
                </div>
                <div className="browser-css mb-10">
                    {post?.data?.description}
                    </div>
    </Container>
  )
}

export default PostPage