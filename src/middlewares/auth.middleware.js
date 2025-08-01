import {asyncHandler} from "../utils/asyncHandler.js";

import { ApiError } from "../utils/ApiError.js";

import { User } from "./../models/user.model.js";
import { Ngo } from "../models/ngo.model.js";


import  jwt  from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async(req,_,next) => {
    try {
      const token =   req?.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
     
      if (!token) {
        throw new ApiError(401,"Unauthorized request")
      }
  
  
    
      const decodedInfo =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
      const user =  await User.findById(decodedInfo.id).select(["-password","-refreshToken"])
        
      if (!user) {
       throw new ApiError(401,"Invalid Access Token")
      }
    
      req.user = user
    
      next()
    } catch (error) {
      throw new ApiError(401,"invalid access token "+error.message)
    }
  });


  export const verifyJWTNGO = asyncHandler(async(req,_,next) => {
    try {
      const token =   req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
     
      if (!token) {
        throw new ApiError(401,"Unauthorized request")
      }
  
  
    
      const decodedInfo =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
      const user =  await Ngo.findById(decodedInfo.id).select(["-password","-refreshToken"])
        
      if (!user) {
       throw new ApiError(401,"Invalid Access Token")
      }
    
      req.user = user
    
      next()
    } catch (error) {
      throw new ApiError(401,"invalid access token "+error.message)
    }
  });



