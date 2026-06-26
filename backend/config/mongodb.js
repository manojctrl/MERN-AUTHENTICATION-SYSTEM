const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Mero Connection Link:", process.env.DATABASE_URL,"/auth"); 
        
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Database connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
