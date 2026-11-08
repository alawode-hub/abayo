import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

if (models.User) {
    delete models.User;
}

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
