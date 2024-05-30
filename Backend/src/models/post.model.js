import { model,Schema } from 'mongoose';

import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"




const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String, //cloudinary image
            required: true,
        },
        keywords: [
            {
                type: String,
                 
            }
        ]
            ,
        owner:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },
    {
        timestamps: true,
    }
)

postSchema.plugin(mongooseaggregatepaginate);

export const Post = model('Post', postSchema);