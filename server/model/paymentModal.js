const mongoose = require('mongoose');
const User = require('./userModal');
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

paymentSchema.pre('findOneAndDelete', async function(next) {
    const timingId = this.getQuery()["_id"];
    await User.updateMany(
        { timing: timingId },
        { $set: { timing: null } }
    );
    next();
});

module.exports = mongoose.model('payment', paymentSchema); 