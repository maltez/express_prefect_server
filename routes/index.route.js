const router = require('express').Router();

const routes = require('../constants/routes');
const codes = require('http-status-codes');

router.get(routes.defaultRouter, (req, res) => {
    res.json({
        code: codes.OK,
        message: 'Working',
    });
});

router.post(routes.defaultRouter, (req, res) => {
    res.json({
        code: codes.OK,
        body: req.body,
        message: 'Working',
    });
});

module.exports = router;
