const mongoose = require('mongoose');
const User = require('./userModal');
require('./../db/connection')

const timingSchema = new mongoose.Schema({
    startTime: {
        type: String, 
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

timingSchema.pre('findOneAndDelete', async function(next) {
    const timingId = this.getQuery()["_id"];
    await User.updateMany(
        { timing: timingId },
        { $set: { timing: null } }
    );
    next();
});


module.exports = mongoose.model('timing', timingSchema);