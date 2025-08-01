import { model,Schema } from 'mongoose';



const messageSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        sender: {
            type: Schema.Types.ObjectId,
            ref:"User" ||"Ngo",
            required: true,
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref:"User" ||"Ngo",
            required: true,
        },

    },
    {
        timestamps: true,
    }
)


export const Message = model('Message', messageSchema);
