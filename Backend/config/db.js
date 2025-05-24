import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}