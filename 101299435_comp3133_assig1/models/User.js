const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        match: [/^[0-9A-Z$#&_a-z]+$/, "Password must be min 6 characters length and can contain only upper/lower alphabets, 0-9, #, $, &, _"]
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    type: {
        type: String,
        enum: ["admin", "customer"],
        required: true
    }

})

const User = mongoose.model("User", UserSchema);
module.exports = User;