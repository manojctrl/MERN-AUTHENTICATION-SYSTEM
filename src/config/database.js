import mongoose from 'mongoose';
import config from './config.js';

// Added async so await can be used
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_DB_URL);
        console.log("Connected to DB"); // Fixed typo "FB" -> "DB"
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Stop the server if the database fails
    }
};

// Fixed: Changed from module.exports to ES modules export
export default connectDB;
