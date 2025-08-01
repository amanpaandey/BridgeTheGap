import Container from "@/components/Container"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import axios from "axios"
import toast from "react-hot-toast"

import { API_BASE_URL } from "@/constant";

import { useNavigate } from "react-router-dom"



function CreatePost() {

const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")
    const [postKeywords, setPostKeywords] = useState("")
    const [postImage, setPostImage] = useState(null)
    const handleSubmit = async(e) => {
      e.preventDefault()
     

     try {
         const formData = new FormData();
         formData.append("title", postTitle);
         formData.append("description", postDescription);
         formData.append("keywords", postKeywords);
         formData.append("coverImage", postImage);

       const res =  await axios.post(`${API_BASE_URL}/api/v1/post/addPost`, formData,{
           withCredentials:true,
        });
        if(res.data){
            toast.success(res.data.message);
            setPostTitle("")
            setPostDescription("")
            setPostKeywords("")
            setPostImage(null)
            navigate("/post")
        }
     } catch (error) {
        console.log(error);
        toast.error(error.message);
     }
           

    }

  return (
    <Container>


        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200">
                Create a New Post
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                Share your latest initiatives and projects with the community.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <Label htmlFor="postTitle">Post Title</Label>
                <Input
                  id="postTitle"
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Enter post title"
                  required
                />
              </div>
              <div>
                <Label htmlFor="postDescription">Post Description</Label>
                <Textarea
                  id="postDescription"
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                  placeholder="Enter post description"
                  rows={4}
                  required
                />
              </div>
              <div>
                <Label htmlFor="postKeywords">Post Keywords</Label>
                <Input
                  id="postKeywords"
                  type="text"
                  value={postKeywords}
                  onChange={(e) => setPostKeywords(e.target.value)}
                  placeholder="Enter post keywords (separated by commas)"
                  required
                />
              </div>
              <div>
                <Label htmlFor="postImage">Post Image</Label>
                <div className="flex items-center">
                  <Input
                    id="postImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPostImage(e.target.files[0])}
                    required
                  />
                  {postImage && (
                    <img
                      src="/placeholder.svg"
                      alt="Post Image"
                      width={100}
                      height={100}
                      className="ml-4 rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>
              <Button type="submit">Create Post</Button>
            </form>
          </div>
        </section>
      
    </Container>
  )
}

export default CreatePost