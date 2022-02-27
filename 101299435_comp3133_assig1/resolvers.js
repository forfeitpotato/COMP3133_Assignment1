const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');
const { astFromValue } = require('graphql');

exports.resolvers = {
    Query: {
        searchName: async (parents, args) => {
            return Listing.find({"listing_title": args.listing_title})
        },
        searchCity: async (parents, args) => {
            return Listing.find({"city": args.city})
        },
        searchPostal: async (parents, args) => {
            return Listing.find({"postal_code": args.postal_code})
        },
        getBookings: async (parents, args) => {
            try {
                x = await User.findOne({"username": args.username, "password": args.password})
                if (x != null){
                    return Booking.find({"username" : args.username})
                }
                return 
            }catch(err) {
                return 
            }
               
        },
        getAdminListings: async (parents, args) => {
            return Listing.find({"username" : args.username})
        },
        getListings: async (parents, args) => {
            return Listing.find({})
        }
    },

    Mutation: {
        addUser: async (parents, args) => {
            let newUser = new User ({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })
            return newUser.save()
        },
        addListing: async (parents, args) => {
            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username 
            }) 
            return newListing.save()
        },
        addBooking: async (parents, args) => {
            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            })
            return newBooking.save()
        }
    }
}