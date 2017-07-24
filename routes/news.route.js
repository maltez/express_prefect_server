const Router = require('express').Router();
const BaseRouter = require('./base/router.base');
const CrudBase = require('../services/crud.service');
const logger = require('../services/logger.service');
const NewsModel = require('../models/news.model');

Router.use((req, res, next) => {
    logger.info('Put here security route');
    next();
});

new BaseRouter(Router, new CrudBase(NewsModel));

module.exports = Router;
