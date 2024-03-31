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
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    timing: {
        type: Schema.Types.ObjectId,
        ref: 'timing',
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
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema); 