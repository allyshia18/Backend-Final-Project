import { Document, Model, Schema, model } from 'mongoose';

interface IPost extends Document {
    username: string;
    location: string;
    socialPost: string;
    createdAt: Date
}

const postSchema : Schema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true
    },
    socialPost:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    }
});

const Post: Model <IPost> = model('Post', postSchema)

export { IPost, Post };