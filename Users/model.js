import mongoose from "mongoose";
import { userSchema, postSchema } from './schema.js';

const userModel = mongoose.model("users", userSchema);
const postModel = mongoose.model("posts", postSchema);


export {userModel, postModel};