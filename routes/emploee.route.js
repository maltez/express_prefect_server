const router = require('express').Router();

const constants = require('../constants/routes');
const service = require('../services/emploee.service');

router.get(constants.defaultRouter, (req, res, next) => {
    service.findAll(req.query.page, req.query.itemsPerPage)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.post(constants.defaultRouter, (req, res, next) => {
    service.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.delete(constants.getBy, (req, res, next) => {
    service.remove(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.put(constants.getBy, (req, res, next) => {
    service.update(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

module.exports = router;
