const Router = require('express').Router();
const BaseRouter = require('./base/router.base');
const ModelProvider = require('../services/data.service');
const UserModel = require('../models/user.model');

new BaseRouter(Router, new ModelProvider(UserModel));
module.exports = Router;
