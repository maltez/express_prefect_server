const routes = require('../../constants/routes');

class BaseRouter {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.router.get(routes.defaultRouter, this.get.bind(this));
        this.router.post(routes.defaultRouter, this.post.bind(this));
        this.router.delete(routes.getBy, this.delete.bind(this));
        this.router.put(routes.getBy, this.put.bind(this));
    }

    get(req, res) {
        this.dataService.find()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    }

    post(req, res) {
        this.dataService.create(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    }

    put(req, res) {
        this.dataService.update(req.body)
            .then((data) => {
                res.json(data);
            });
    }

    delete(req, res) {
        this.dataService.remove(req.params.id)
            .then((data) => {
                res.json(data);
            });
    }
}

module.exports = BaseRouter;
