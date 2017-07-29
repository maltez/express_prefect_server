const Sequelize = require('sequelize');

const sequelize = require('../services/base/relational.data.provider');
const config = require('../config/db.config');

const Emploee = sequelize.define(config.schemaNames.emploee, {
    Name: {
        type: Sequelize.STRING
    },
    Surname: {
        type: Sequelize.STRING
    },
    Position: {
        type: Sequelize.STRING
    },
    Experience: {
        type: Sequelize.NUMBER
    },
    Email: {
        type: Sequelize.STRING
    }
});

module.exports = Emploee;
