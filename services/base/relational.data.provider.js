const Sequelize = require('sequelize');
const config = require('../../config/db.config');

const sequelize = new Sequelize(config.rdbName, null, null, {
    dialect: config.dialect,
    storage: config.storage,
});

module.exports = sequelize;
