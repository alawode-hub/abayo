import mongoose, { Schema, models, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

if (models.Post) {
    delete models.Post;
}

const PostModel = models.Post || model("Post", PostSchema);
export default PostModel;



