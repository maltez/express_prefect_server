const ObjectId = require('mongoose').Types.ObjectId;
require('./base/data.provider');

class ModelProvider {
    constructor(model, options = {}) {
        this._model = model;
        this._options = options;
    }

    create(model) {
        return new this._model(model)
            .save()
            .then(data => data);
    }

    findByCustomId(id) {
        return this._model
            .findById(id)
            .then((data) => {
                if (data === null) {
                    throw new Error('Fix');
                }
                return data;
            });
    }

    findById(id) {
        if (!ObjectId.isValid(id)) {
            return Promise.reject(
                new Error(''));
        }

        const populate = (this._options.populate || []).join(' ');

        return this._model
            .findById(id)
            .populate(populate)
            .then((data) => {
                if (data === null) {
                    throw new Error('Fix');
                }
                return data;
            });
    }

    find() {
        const searchingCriteria = { IsActive: true };
        return this._model
            .find(searchingCriteria)
            .exec();
    }

    update(model) {
        const _id = model._id;

        return this.findById(_id)
            .then(() => this._model.update({ _id }, { $set: model }));
    }

    remove(id) {
        return this.findById(id)
            .then(() => this._model.update({ _id: id }, { $set: { IsActive: false } }));
    }
}

module.exports = ModelProvider;
