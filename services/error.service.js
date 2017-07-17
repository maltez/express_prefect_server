const codes = require('http-status-codes');
const logger = require('./logger.service');

module.exports = {
    notFound: (req, res) => {
        logger(`${req.url} : Not Found`);
        res.status(codes.NOT_FOUND);
        res.json({
            code: codes.NOT_FOUND,
            message: 'Route not found',
        });
    },
    internal: (err, req, res, next) => {
        logger.error(`${err} : Not Found`);
        res.status(codes.INTERNAL_SERVER_ERROR);
        res.json({
            code: codes.INTERNAL_SERVER_ERROR,
            message: 'Route not found',
        });
        next();
    },
};
