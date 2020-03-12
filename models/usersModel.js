const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    childAge: {
        type: Number,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    signupDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('users', userSchema)