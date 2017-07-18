const logger = require('./logger.service');

class CRUDService {
    constructor(schema) {
        this.Schema = schema;
    }

    create(model) {
        const newModel = model;
        logger.info(`Model ${model} with schema ${this.Schema} was created`);
        newModel.id = Number.parseInt(Math.random() * 100, 10);
        return newModel;
    }

    update(model) {
        const newModel = model;
        logger.info(`Model ${model} with schema ${this.Schema} was updated`);
        return newModel;
    }

    read(id) {
        const model = new this.Schema();
        logger.info(`Model ${model} with schema ${this.Schema} was found`);
        model.name = 'Hello';
        model.description = 'World';
        model.id = id;
        model.isActive = true;
        return model;
    }

    delete(id) {
        logger.info(`Model with ${id} with schema ${this.Schema} was deleted`);
        return true;
    }
}

module.exports = CRUDService;
