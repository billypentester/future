const mongoose = require('mongoose');
const User = require('./userModal');
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

courseSchema.pre('findOneAndDelete', async function(next) {
    const timingId = this.getQuery()["_id"];
    await User.updateMany(
        { timing: timingId },
        { $set: { timing: null } }
    );
    next();
});

module.exports = mongoose.model('course', courseSchema); 