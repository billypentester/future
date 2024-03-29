const mongoose = require('mongoose');
require('./../db/connection')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    bankAccount: {
        type: String,
        required: true
    },
    screenShot: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema); 