import { userModel, postModel } from "./model.js";

export const createUser = (user) => userModel.create(user);
export const findAllUsers = () => userModel.find();
export const findUserById = (userId) => userModel.findById(userId);
export const findUserByUsername = async (username) => {
  try {
    const user = await userModel.findOne({ username: username });
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const findUserByCredentials = (username, password) =>
    userModel.findOne({ username, password });
export const updateUser = (userId, user) =>
    userModel.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => userModel.deleteOne({ _id: userId });

export const createPost = (post) => postModel.create(post);
export const findAllPosts = () => postModel.find();
export const findPostById = (postId) => postModel.findById(postId);
export const updatePost = (postId, post) =>
    postModel.updateOne({ _id: postId }, { $set: post });
export const deletePost = (postId) => postModel.deleteOne({ _id: postId });
