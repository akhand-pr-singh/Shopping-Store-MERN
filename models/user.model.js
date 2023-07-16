import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        default: 0
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }

}, {timestamps: true});

const User = model('users', userSchema);

export default User;