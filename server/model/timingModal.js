const mongoose = require('mongoose');
require('./../db/connection')

const timingModal = new mongoose.Schema({
    startDateTime: {
        type: Date,
        required: true
    },
    endDateTime: {
        type: Date,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('timing', timingModal); 