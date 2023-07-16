import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../models/user.model.js';

//dotenv cofig
dotenv.config();

//Protected Routes token base
const requireSignIn = async(req, res, next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    };
};

//isAdmin
const isAdmin = async(req, res, next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !==1)
        {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            });
        };
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin'
        });    
    }
}

export {requireSignIn, isAdmin};