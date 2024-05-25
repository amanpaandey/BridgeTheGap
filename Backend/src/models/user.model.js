import  { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  avatar: {
    type: String, // cloudinary url
    required: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
  donatedTo: [{ type: Schema.Types.ObjectId, ref: "Ngo" }],
  likedPost: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  refreshToken: {
    type: String,
  },
},
{
  timestamps: true,
});


userSchema.pre("save",async function (next) {
    if (!this.isModified("password")) return next();


    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken =  function () {
    return  jwt.sign(
      {
        id: this._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    
    
};

userSchema.methods.generateRefreshToken =  function () {
    return jwt.sign(
      {
        id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );
    
    
};




export const User = model("User", userSchema);
