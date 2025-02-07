import { User } from "../models/userSchema.js"
import bcrypt from "bcrypt"

export const register = async(req, res, next) => {
    const {name, email, phone, password} = req.body;

    if(!name || !email || !phone || !password){
        return next(
            res.status(400).json({
                success: false,
                message: "Please fill all the details."
            })
        )
    }

    const isUser = await User.findOne({email, phone});
    if(isUser){
        return next(
            res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        )
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, phone, password: hashedPassword});
    res.status(200).json({
        success: true,
        message: "User Registered!",
        user
    })
}

export const login = async(req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return next(
            res.status(400).json({
                success: false,
                message: "Invalid email or password."
            })
        )
    }
    const user = await User.findOne({email});
    if(!user){
        
    }
    const isPasswordMatching = bcrypt.compare(password, user.password);
    if(!isPasswordMatching){
        return next(
            res.status(400).json({
                success: false,
                message: "Invalid email or password."
            })
        )
    }
    res.status(200).json({
        success: true,
        message: "User logged in!"
    })
}