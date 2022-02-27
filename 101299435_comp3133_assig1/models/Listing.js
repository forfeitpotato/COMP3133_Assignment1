const mongoose = require('mongoose');
const User = require('./User');


const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true
    },
    listing_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: true,
        validate: async (name) => {
            try{
                x = await User.findOne({"username": name})
                if(x.type == "admin"){
                    return true
                }
                return false
            } catch (err) {
                return false
            }
        }
    }
    
})

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;