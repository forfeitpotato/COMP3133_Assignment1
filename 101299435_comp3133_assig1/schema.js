const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

    type Query {
        getBookings(username: String, password: String): [Booking]
        getListings: [Listing]
        getAdminListings(username: String, password: String): [Listing]
        searchName(listing_title: String): [Listing]
        searchCity(city: String): [Listing]
        searchPostal(postal_code: String): [Listing]
    }

    type Mutation {
        addUser(username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!) : User

        addListing(listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!) : Listing
        
        addBooking(listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!) : Booking
    }
`