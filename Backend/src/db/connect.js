import { dbName } from "../constant.js";
import  mongoose  from 'mongoose';




const dbConnet = async () => {
    try {
        const connection  = await mongoose.connect(
            `${process.env.MOGODB_URI}/${dbName}`
        );
        console.log(`\n MONGODB CONNECTED ON url : ${connection.connection.host}`);
    } catch (error) {
        console.log("ERROR IN CONNECTING DATABASE "+error);
        process.exit(1);
    }
}

export default dbConnet;
