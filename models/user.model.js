const mongoose = require('mongoose');
const modelNames = require('../constants/model.constants');
const config = require('../config/db.config');
require('mongoose-schema-extend');

const SchemaBase = require('./base/base.model.js');

const userSchema = SchemaBase.extend({
    UserId: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
});

const User = mongoose.model(modelNames.User, userSchema, `mongodb://${config.host}:${config.port}/${config.dbName}`);

module.exports = User;
