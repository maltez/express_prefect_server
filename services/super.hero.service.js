const SuperHero = require('../models/super.hero.model');

class SuperHeroService {
    constructor(model) {
        this.model = model;
        model.sync({ force: false });
    }

    findAll(page = 1, itemsPerPage = 10) {
        return this
            .model
            .findAll()
            .then((data) => {
                const result = {
                    data: data.slice((page - 1) * itemsPerPage, page * itemsPerPage),
                    page,
                    itemsPerPage,
                    total: data.length,
                };

                return result;
            });
    }

    create(model) {
        return this.model.create(model);
    }

    remove(id) {
        return this.model.destroy({
            where: {
                id,
            },
        });
    }

    update(model) {
        return this.model.update(model, {
            where: {
                id: model.id,
            },
        });
    }
}

module.exports = new SuperHeroService(SuperHero);
