const mongoose = require('mongoose');
const User = require('./User');
const Listing = require('./Listing');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        validate: async (id) => {
            x = await Listing.findOne({"listing_id": id})
            if(x.listing_id != null){
                return true
            }
            return false
        }
    },
    booking_id: {
        type: String,
        required: true
    },
    booking_date: {
        type: String,
        required: true
    },
    booking_start: {
        type: String,
        required: true
    },
    booking_end: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        validate: async (name) => {
            try{
                x = await User.findOne({"username": name})
                if(x.type == "customer"){
                    return true
                }
                return false
            } catch (err) {
                return false
            }
        }
    }
})

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;