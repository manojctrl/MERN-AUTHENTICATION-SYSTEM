require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/UserRoutes");

const app = express();


connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ 
    origin: process.env.FRONTEND_URL || "http://localhost:5173", 
    credentials: true 
}));
app.use(express.urlencoded({ extended: true })); 


app.use("/user", userRoutes);


app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT:${PORT}`);
});
