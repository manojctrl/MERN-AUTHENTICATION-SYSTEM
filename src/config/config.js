import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGO_DB_URL){
    throw new Error("Mongo_URL is not defned in environment variables") 
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET is not defined in environment variiables")
}

const config = {
    MONGO_DB_URL : process.env.MONGO_DB_URL,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config;