import jwt from "jsonwebtoken"
import { User } from "../models/userSchema.js";

const isAuthenticated = async(req, res, next) => {
    const { token } = req.cookies;
    // console.log(token);
    if(!token){
        return next(
            res.status(401).json({
                success: false,
                message: "User not Authenticated!"
            })
        )
    }
    const decoded = await jwt.verify(token, process.env.JWT_secret);
    req.user = await User.findById(decoded.id);
    next();
}

export default isAuthenticated;