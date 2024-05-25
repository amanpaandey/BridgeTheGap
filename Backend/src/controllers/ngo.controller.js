import { Ngo } from "../models/ngo.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

import { cloudinaryHandler, deleteOnCloudinary } from "../utils/cloudinary.js";

const generateAccessTokenAndrefreshToken = async (userId) => {
  try {
    const user = await Ngo.findById(userId);
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

const registerNgo = asyncHandler(async (req, res) => {
  const {
    ngoName,
    ngoEmail,
    ngoAddress,
    password,
    ngoPhone,
    ngoDescription,
    ngoRegistrationUniqueId,
  } = req.body;

  if (
    [ ngoName,
        ngoEmail,
        ngoAddress,
        password,
        ngoPhone,
        ngoDescription,
        ngoRegistrationUniqueId].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedNgo = await Ngo.findOne({
    $or: [{ ngoName }, { ngoRegistrationUniqueId }],
  });

  if (existedNgo) {
    throw new ApiError(409, "Ngo already exists with same name and id");
  }

  const avatarLocalPath = req.files?.ngoAvatar[0]?.path;
  //const coverImageLocalPath = req.files?.coverImage[0]?.path

  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar is required");
  }

  const ngoAvatar = await cloudinaryHandler(avatarLocalPath);

  if (!ngoAvatar) {
    throw new ApiError(400, "avatar is required");
  }

  const ngo = await Ngo.create({
    ngoName: ngoName.toLowerCase(),
    ngoPhone,
    ngoAvatar: ngoAvatar.url,
    ngoDescription,
    password,
    ngoEmail,
    ngoAddress,
    ngoRegistrationUniqueId,
  });

  const createdNgo = await Ngo.findById(ngo._id).select([
    "-password",
    "-refreshToken"
    ]
  );

  if (!createdNgo) {
    throw new ApiError(500, "something went wrong while registering ngo");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdNgo, "Ngo registered successfully"));
});

const loginNgo = asyncHandler(async (req, res) => {
    //TODO
    // get email and password from the frontend
    //check if the either of the field is empty  if throw error
    //now compare the given fields from the database with the help of bcrypt
    //genrate tokens
    // if everything goes well return thr response by removing the password and resfresh token fields
    try {
      const { ngoEmail, ngoName, password } = req.body;
      
       
  
      //console.log(email,password);
      if (!ngoEmail && !ngoName) {
        throw new ApiError(400, "email or userName is required");
      }
  
      const currentNgo = await Ngo.findOne({
        $or: [{ ngoEmail }, { ngoName }],
      });

      
  
      if (!currentNgo) {
        throw new ApiError(404, "user does not exist");
      }
  
      const isPasswordValid = await currentNgo.isPasswordCorrect(password);
  
      if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password please check your password");
      }
  
      const { accessToken, refreshToken } =
        await generateAccessTokenAndrefreshToken(currentNgo._id);
  
      const loggedInNgo = await Ngo.findById(currentNgo._id).select([
        "-password",
        "-refreshToken",
      ]);
  
      const options = {
        httpOnly: true,
        
      };
  
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            {
              ngo: loggedInNgo,
              accessToken,
              refreshToken,
            },
            "Ngo loggedIn successfully"
          )
        );
    } catch (error) {
      throw new ApiError(500, "An Error occured while logging in ngo");
    }
  });

  const logoutNgo = asyncHandler(async (req, res) => {
    
    await Ngo.findByIdAndUpdate(
      req.user.id,
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
     
    };
  
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "Ngo logged out successfully"));
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
  
      const user = await Ngo.findById(decodedIncomingRefreshToken?.id);
  
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
        "Internal server error while refreshing token in ngo controller" + error?.message
      );
    }
  });

  const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req?.body;
  
    const user = await Ngo.findById(req?.user?.id);
  
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
  
  const getCurrentNgo = asyncHandler(async (req, res) => {
    return res
      .status(200)
      .json(new ApiResponse(200, req.user, "current Ngo fetched successfully"));
  });

  const updateNgoDetails = asyncHandler(async (req, res) => {
    const { email, username,phone,address,description, } = req.body;
  
    if (!(email || username || phone || address || description)) {
      throw new ApiError(400, "Invalid ngo details");
    }
  
    const user = req?.user?.id;
  
    const updatedUser = await Ngo.findByIdAndUpdate(
      user,
      {
        $set: {
            ngoName: username,
            ngoAddress:address,
            ngoPhone:phone,
            ngoEmail:email,
            ngoDescription:description,

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

 const updateNgoAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    
  
    if (!avatarLocalPath) {
      throw new ApiError(400, "Please provide Ngo avatar");
    }
  
    const oldImage = req?.user?.ngoAvatar;
    
    if (!oldImage) {
      throw new ApiError(
        400,
        "error while finding the url for deleting the current ngo avatar from cloudinary"
      );
    }
  
   const deletedAvatar =  await deleteOnCloudinary(oldImage)
  
   if (!deletedAvatar) {
    throw new ApiError(
      400,
      "error while deleting the current ngo avatar from cloudinary"
    );
   }
  
    const avatar = await cloudinaryHandler(avatarLocalPath);
  
    if (!avatar.url) {
      throw new ApiError(400, " ngo Avatar upload failed on cloudinary");
    }
  
    const updatedUser = await Ngo.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          ngoAvatar: avatar.url,
        },
      },
      {
        new: true,
      }
    ).select("-password");
  
    return res
      .status(200)
      .json(new ApiResponse(200, updatedUser, "Ngo Avatar updated successfully"));
  });

  const getNgoImages = asyncHandler(async (req, res) => {

    const id = req.user.id;

    if (!id) {
        throw new ApiError(404,"ngo id not found");
        
    }

  const images =  await Ngo.findById(id)
     .select("ngoImages")


     if (!images) {
        throw new ApiError(404,"ngo images not found");
     }
     
     return res.status(200).json(ApiResponse(200,images,"Ngo Images found successfully"));
  })

  const ngoUploadImage = asyncHandler(async (req, res) => {
    const imageLocalPath = req.file?.path;
    if (!imageLocalPath) {
      throw new ApiError(400, "Please provide Ngo image");
    }
    const image = await cloudinaryHandler(imageLocalPath);
    if (!image.url) {
      throw new ApiError(400, " Ngo image upload failed on cloudinary");
    }
    const updatedUser = await Ngo.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          ngoImages: image.url,
        },
      },
      {
        new: true,
      }
      
    ).select("ngoImages");
    return res
     .status(200)
     .json(new ApiResponse(200, updatedUser, "Ngo image uploaded successfully"));

}
  );










export { 
    registerNgo,
    loginNgo,
    logoutNgo,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentNgo,
    updateNgoDetails,
    updateNgoAvatar,
    getNgoImages,
    ngoUploadImage

};
