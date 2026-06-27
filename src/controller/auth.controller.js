import userModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../config/config.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const isAlreadyRegistered = await userModel.findOne({ email });

        if (isAlreadyRegistered) {
            return res.status(409).json({
                success: false,
                message: "Your email is already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

    
        const token = jwt.sign(
            { id: newUser._id }, 
            config.JWT_SECRET, 
            { expiresIn: "7d" }
        );

        
        return res.status(201).json({
            success: true, 
            message: "User registered successfully",
            user: {
                username: newUser.username,
                email: newUser.email,
                password: hashedPassword
            },
            token
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


export const getme = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({
                message: "token not found "
            })
        }

        const decoded = jwt.verify(token, config.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        res.status(200).json({
            success: true,
            message: "user fetched successfully",
            user: {
                username: user.username,
                email: user.email,
            }


        })

        
        console.log(decoded)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
        
    }

}
