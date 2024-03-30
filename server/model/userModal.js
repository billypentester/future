const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    course: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    paymentMode: {
        type: Schema.Types.ObjectId,
        ref: 'payment',
        required: true
    },
    screenShot: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema); 