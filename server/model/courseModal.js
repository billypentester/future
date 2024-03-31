const mongoose = require('mongoose');
require('./../db/connection')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('course', courseSchema); 