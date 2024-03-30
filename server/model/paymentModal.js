const mongoose = require('mongoose');
require('./../db/connection')

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('payment', paymentSchema); 