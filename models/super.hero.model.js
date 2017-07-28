const Sequelize = require('sequelize');
const sequelize = require('../services/base/relational.data.provider');
const config = require('../config/db.config');

const SuperHero = sequelize.define(config.schemaNames.superHero, {
    Name: {
        type: Sequelize.STRING,
    },
    Surname: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
    },
});

module.exports = SuperHero;
