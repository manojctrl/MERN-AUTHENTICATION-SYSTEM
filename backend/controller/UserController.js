 const User = require("../models/UserModel");
 
 const registerUser = async (req, res ) => {
    try {

        const {username, email , password } = req.body;

        if(!username || !email || !password ){
            return res.status(400).json({
                success : false,
                message: "All fields are required"

            })
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json(
                {
                    success: false,
                    message: "User already exists"
                }
            )
        }

        const newUser = await User.create({
            username,
            email, 
            password
        })

        return res.status(201).json({
            success: true, 
            message : "User has been successfully created",
            data: User
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,

        })
        
    }
 }


 module.exports = registerUser