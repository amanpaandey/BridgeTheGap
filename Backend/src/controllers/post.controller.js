import {cloudinaryHandler,deleteOnCloudinary} from "../utils/cloudinary.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {Post} from "../models/post.model.js"
import { Ngo } from "../models/ngo.model.js";





const addPost  =  asyncHandler(async(req,res) => {
    const {title,description,keywords} = req.body;


    if(!(title || description || keywords)){
        throw new ApiError(400,"All fields are required")
    }

    const user = req.user.id;

    if(!user){
        throw new ApiError(400,"User not found while creating")
    }

    

    const imageLocalPath = req.files?.coverImage[0]?.path;


    
    if (!imageLocalPath) {
        throw new ApiError(400,"Image local path not found")
    }
        
    const uploadImage = await cloudinaryHandler(imageLocalPath);

    if(!uploadImage){
        throw new ApiError(400,"Error while uploading image to cloudinary")
    }

    console.log(uploadImage.url);

    const post = await Post.create({
        title,
        description,
        keywords,
        owner:user,
        coverImage:uploadImage.url
    })
    
    if(!post){
        throw new ApiError(400,"Error while creating post")
    }

   const  postId = post._id;

   if(!postId){
    throw new ApiError(400,"Error while creating post")
   }

   const ngoPost = await Ngo.updateOne({
    _id:user
   },{
    $push:{
        post: postId
    }
   })

   if(!ngoPost){
    throw new ApiError(400,"Error while creating post")
   }


    return res
    .status(201)
    .json(new ApiResponse(201,post,"Post created successfully"))

})


const deletePost = asyncHandler(async(req,res) => {
    const {id} = req.params;

    if (!id) {
        throw new ApiError(400,"Error while deleting post")
    }

    const post = await Post.findById(id);

    if (!post) {
        throw new ApiError(400,"Post not found")
    }

    const deletOnCloudinaryImage = deleteOnCloudinary(post._id);

    if (!deletOnCloudinaryImage) {
        throw new ApiError(400,"Error while deleting image from cloudinary")
        
    }

   const deletePost =  await Post.deleteOne({_id :post._id});

   if (!deletePost) {
    throw new ApiError(400,"Error while deleting post")
    
   }

    return res
   .status(200)
   .json(new ApiResponse(200,"","Post deleted successfully"))
})

const addLike = asyncHandler(async(req, res) =>{
 
    const {id} = req.params;
    if (!id) {
        throw new ApiError(400,"error while getting id")
        
    }

    const post = await Post.findById(id);

    if (!post) {
        throw new ApiError(400,"Post not found")
        
    }

    const user = req.user;

    if (!user) {
        throw new ApiError(400,"User not found")
        
    }

    const pushLike = await Post.updateOne({_id :user._id},{
        $push:{
            likes:user._id
        }
    })

    if (!pushLike) {
        throw new ApiError(400,"Error while adding like")
        
    }

    const likes = await Post.findById(user._id).select('likes')

    if (!likes) {
        throw new ApiError(400,"Error while getting likes")
        
    }

    return res
   .status(200)
   .json(new ApiResponse(200,likes,"Like added successfully"))

})

const getAllPosts = async (req, res) => {
    const posts = await Post.aggregate([
        {
          $lookup: {
            from: 'ngos',           // the collection to join with
            localField: 'owner',    // the field from post documents
            foreignField: '_id',      // the field from owner documents
            as: 'owner'               // the output array field
          }
        },
        {
          $unwind: '$owner'           // deconstructs the array field so that each document has a single owner
        }
      ]);
    return res.status(200).json(new ApiResponse(200, posts, "Posts fetched successfully"));
}

const getOnepost = async (req, res) => {
    const { id } = req.params;
    
    //console.log(id);
    if (!id) {
      throw new ApiError(400, "Error while getting id");


    }

    const post = await Post.findById(id);

  //console.log(post);

  const postWithOwner = await Post.aggregate([
    { $match: { _id:post._id } },
    {
      $lookup: {
        from: 'ngos', 
        localField: 'owner', 
        foreignField: '_id', 
        as: 'owner', 
      },
    },
    { $unwind: '$owner' }, 
  ]);

  if (postWithOwner.length === 0) {
    throw new ApiError(400, "Post not found");
  }

    return res.status(200).json(new ApiResponse(200, postWithOwner[0], "Post fetched successfully"));
};

export {
    addPost,
    deletePost,
    addLike,
    getAllPosts,
    getOnepost
}