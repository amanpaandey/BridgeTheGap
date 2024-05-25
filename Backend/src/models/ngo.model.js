import  { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const ngoSchema = new Schema({
    ngoName :{
        type: String,
        required: true,
        unique:true,
    },
    ngoAddress :{
        type: Object,
        required: true,
    },
    ngoPhone :{
        type: Number,
        required: true,
    },
    ngoEmail :{
        type: String,
        required: true,
        unique:true,
    },
    password :{
        type: String,
        required: [true,"password is required"],
    },
    ngoDescription :{
        type: String,
        required: true,
    },
    ngoAvatar :{
        type: String,
        
    },
    refreshToken: {
        type: String,
       
        
      },
    post:[
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    donationRecieved:[
        {
            type: Schema.Types.ObjectId,
            ref: "Donation"
        }
    ],
    likedPost:[
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    images:[
        {
            type:String,
        }
    ],
    ngoRegistrationUniqueId: {
        type: String,
        required: true,
        unique: true,
    }
    
},
{
    timestamps: true,
    
});


ngoSchema.pre('save',async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

ngoSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

ngoSchema.methods.generateAccessToken =  function () {
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

ngoSchema.methods.generateRefreshToken =  function () {
    return   jwt.sign(
      {
        id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );
    
    
};





ngoSchema.plugin(mongooseAggregatePaginate);

export const Ngo = model("Ngo",ngoSchema);