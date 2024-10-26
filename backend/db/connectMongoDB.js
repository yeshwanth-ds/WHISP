import mongoose from "mongoose";

const connectToMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");  
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoose;
