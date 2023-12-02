import { RequestHandler } from "express";
import { IPost, Post } from "../models/post";
import { IUser } from "../models/user";
import { verifyUser } from "../services/auth";


//Get one Post

export const getOnePost: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let post = await Post.findById(itemId);
    res.status(200).json(post);
}

//Add Post

export const addPost: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    const newPost: IPost = new Post({
        username: req.body.username,
        location: req.body.location,
        socialPost: req.body.socialPost
    });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

//Get All Post

export const getAllPost: RequestHandler = async (req, res, next) => {
        let postList = await Post.find();
        res.status(200).json(postList);
}

//Edit Post

export const editPost: RequestHandler = async (req, res, next) =>  {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let itemId = req.params.id;
    const updatedPost: IPost = new Post({
        _id: itemId,
        username: req.body.username,
        location: req.body.location,
        socialPost: req.body.socialPost,
        createdAt: req.body.createdAt
    });

    await Post.findByIdAndUpdate(itemId, { $set: updatedPost })

    res.status(200).json(updatedPost);
}

//Delete Post

export const deletePost: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let itemId = req.params.id;
    let result = await Post.findByIdAndDelete(itemId);
    res.status(200).json(result);
}






