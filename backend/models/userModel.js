const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        default: "Kevin"
    }
})

const UserModel = mongoose.model('userSchema', userSchema);
module.exports = {UserModel};