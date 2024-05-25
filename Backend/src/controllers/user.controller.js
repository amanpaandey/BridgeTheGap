import {User} from "../models/user.model.js"
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

import {cloudinaryHandler,deleteOnCloudinary} from "../utils/cloudinary.js";


const generateAccessTokenAndrefreshToken = async (userId) => {
    try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
  
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      throw new ApiError(
        500,
        "something went wrong while generating access and refresh tokens "
      );
    }
  };


const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, username, password } = req.body;
  
    if (
      [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "All fields are required");
    }
  
    const existedUser = await User.findOne({
      $or: [{ email }, { username }],
    });
  
    if (existedUser) {
      throw new ApiError(409, "User already exists with same username or email");
    }
  
    const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path

    
  
    
  
    if (!avatarLocalPath) {
      throw new ApiError(400, "avatar is required");
    }
  
    const avatar = await cloudinaryHandler(avatarLocalPath);
    
  
    if (!avatar) {
      throw new ApiError(400, "avatar is required");
    }
  
    const user = await User.create({
      username: username.toLowerCase(),
      fullname,
      avatar: avatar.url,
      
      password,
      email,
    });
  
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
  
    if (!createdUser) {
      throw new ApiError(500, "something went wrong while registering user");
    }
  
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "user registered successfully"));
  });

  const loginUser = asyncHandler(async (req, res) => {
    //TODO
    // get email and password from the frontend
    //check if the either of the field is empty  if throw error
    //now compare the given fields from the database with the help of bcrypt
    //genrate tokens
    // if everything goes well return thr response by removing the password and resfresh token fields
    try {
      const { email, username, password } = req.body;
  
    //  console.log(req.body);
      if (!username && !email) {
        throw new ApiError(400, "email or userName is required");
      }
  
      const currentUser = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      if (!currentUser) {
        throw new ApiError(404, "user does not exist");
      }
  
      const isPasswordValid = await currentUser.isPasswordCorrect(password);
  
      if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password please check your password");
      }
  
      const { accessToken, refreshToken } =
        await generateAccessTokenAndrefreshToken(currentUser._id);
  
      const loggedInUser = await User.findById(currentUser._id).select([
        "-password",
        "-refreshToken",
      ]);
  
      const options = {
        httpOnly: true,
        
       /*  secure: true, */
      };
  
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            {
              user: loggedInUser,
              accessToken,
              refreshToken,
            },
            "user loggedIn successfully"
          )
        );
    } catch (error) {
      throw new ApiError(500, "An Error occured while logging in user");
    }
  });


  const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );
    const options = {
      httpOnly: true,
      
      /* secure: false, */
    };
  
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "user logged out successfully"));
  });

  const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken =
      req?.cookies?.refreshToken || req?.body?.refreshToken;
  
    if (!incomingRefreshToken) {
      throw new ApiError(401, "unauthroized request");
    }
  
    try {
      const decodedIncomingRefreshToken = jwt.verify(
        incomingRefreshToken,
        process.env.ACCESS_TOKEN_SECRET
      );

      if (!decodedIncomingRefreshToken) {
        throw new ApiError(401, "Invalid refreshToken");
      }
  
      const user = await User.findById(decodedIncomingRefreshToken?.id);
  
      if (!user) {
        throw new ApiError(401, "Invalid refreshToken");
      }
  
      if (incomingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401, "Refresh token expired please login again");
      }
  
      const options = {
        httpOnly: true,
        secure: true,
      };
  
      const { accessToken, newRefreshToken } =
        await generateAccessTokenAndrefreshToken(user?.id);
  
      res
        .status(200)
        .cookie("refreshToken", newRefreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(
          new ApiResponse(
            200,
            {
              accessToken,
              refreshToken: newRefreshToken,
            },
            "refreshToken matched successfully"
          )
        );
    } catch (error) {
      throw new ApiError(
        500,
        "Internal server error while refreshing token " + error?.message
      );
    }
  });

  const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req?.body;
  
    const user = await User.findById(req?.user?.id);
  
    const isPasswordCorrect = await user.isPasswordCorrect(currentPassword);
    if (!isPasswordCorrect) {
      throw new ApiError(400, "Current password is incorrect");
    }
  
    user.password = newPassword;
    await user.save({ validateBeforeSave: false });
  
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password changed successfully"));
  });

  const getCurrentuser = asyncHandler(async (req, res) => {
    return res
      .status(200)
      .json(new ApiResponse(200, req.user, "current user fetched successfully"));
  });


  const updateAccountDetails = asyncHandler(async (req, res) => {
    const { email, username, fullname } = req.body;
  
    if (!(email || username || fullname)) {
      throw new ApiError(400, "Please provide email,userName or fullName");
    }
  
    const user = req?.user?.id;
  
    const updatedUser = await User.findByIdAndUpdate(
      user,
      {
        $set: {
          email,
          username,
          fullname,
        },
      },
      {
        new: true,
      }
    ).select("-password");
  
    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedUser, "Account details updated successfully")
      );
  });


  const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    
  
    if (!avatarLocalPath) {
      throw new ApiError(400, "Please provide avatar");
    }
  
    const oldImage = req?.user?.avatar;
    
    if (!oldImage) {
      throw new ApiError(
        400,
        "error while finding the url for deleting the current avatar from cloudinary"
      );
    }
  
   const deletedAvatar =  await deleteOnCloudinary(oldImage)
  
   if (!deletedAvatar) {
    throw new ApiError(
      400,
      "error while deleting the current avatar from cloudinary"
    );
   }
  
    const avatar = await cloudinaryHandler(avatarLocalPath);
  
    if (!avatar.url) {
      throw new ApiError(400, "Avatar upload failed on cloudinary");
    }
  
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          avatar: avatar.url,
        },
      },
      {
        new: true,
      }
    ).select("-password");
  
    return res
      .status(200)
      .json(new ApiResponse(200, updatedUser, "Avatar updated successfully"));
  });


  



  export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentuser,
    updateAccountDetails,
    updateUserAvatar,
  };