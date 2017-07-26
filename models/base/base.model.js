const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

module.exports = new Schema({
    IsActive: {
        type: Boolean,
        default: true,
    },
    CreateUser: {
        type: String,
        required: false,
    },
    CreateDate: {
        type: Date,
        default: Date.now,
    },
    UpdateUser: {
        type: String,
        required: false,
    },
    UpdateDate: {
        type: Date,
        default: Date.now,
    },
},
{ versionKey: false });
