const mongoose = require('mongoose');
const User = require('./userModal');
require('./../db/connection')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('admin', adminSchema); 