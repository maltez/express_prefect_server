const routes = require('../../constants/routes');

class BaseRouter {
    constructor(router, CRUDService) {
        this.router = router;
        this.CRUDService = CRUDService;
        this.router.get(routes.getBy, this.get.bind(this));
        this.router.post(routes.defaultRouter, this.post.bind(this));
        this.router.delete(routes.getBy, this.delete.bind(this));
        this.router.put(routes.getBy, this.put.bind(this));
    }

    get(req, res) {
        res.json(this.CRUDService.read(req.params.id));
    }

    post(req, res) {
        res.json(this.CRUDService.create(req.body));
    }

    put(req, res) {
        res.json(this.CRUDService.update(req.body));
    }

    delete(req, res) {
        res.json(this.CRUDService.delete(req.params.id));
    }
}

module.exports = BaseRouter;
