import { User } from "../models/userSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
                message: "Please fill full form."
            })
        )
    }
    const user = await User.findOne({email});
    if(!user){
        return next(
            res.status(400).json({
                success: false,
                message: "Invalid email or password!"
            })
        )
    }
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if(!isPasswordMatching){
        return next(
            res.status(400).json({
                success: false,
                message: "Incorrect Password!"
            })
        )
    }
    const token = await jwt.sign({id: user._id}, process.env.JWT_secret, {
        expiresIn: process.env.tokenExpiresIn
    })
    res.status(200).cookie("token", token , {
            httpOnly: true,
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
        }
    ).json({
        success: true,
        message: "User logged in!",
        user, token
    })
}

const getUser = async(req, res, next) => {
    
}