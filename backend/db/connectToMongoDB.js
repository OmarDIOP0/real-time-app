import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connect to Mongo DB');

    } catch (error) {
        console.log('Error to connecting',error.message);
    }
}

export default connectToMongoDB;