// 1. SABAI BHANDA MATHI YO LINE RAKHNUHOS (Import bhanda pani agadi)
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");

const app = express();

// 2. Database invoke garne
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
    res.send("API WORKING ");
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT:${PORT}`);
});
