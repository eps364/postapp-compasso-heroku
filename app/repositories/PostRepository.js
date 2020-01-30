class PostRepository {

    constructor(model) {
        this._model = model
    }

    async create(post) {
        return await new Promise((resolve, reject) => {

            this._model.create(post)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async find() {
        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    ativo: true
                })
                .populate(['curso', 'usuario'])
                .then(success => {

                    if (success.length == 0)
                        success = 'Nenhum post encontrado!'

                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async findWithPagination(attributes) {
        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    ativo: true
                })
                .populate(['curso', 'usuario']).skip(parseInt(attributes.inicio)).limit(parseInt(attributes.fim))
                .then(success => {

                    if (success.length == 0)
                        success = 'Nenhum post encontrado!'

                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async delete(id) {
        return await new Promise((resolve, reject) => {

            this._model.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        ativo: false,
                        data_modificacao: new Date
                    }
                })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async findById(id) {
        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    _id: id,
                    ativo: true
                })
                .populate(['curso', 'usuario'])
                .then(success => {

                    if (success.length == 0)
                        success = 'Nenhum post encontrado!'

                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async update(post) {

        return await new Promise((resolve, reject) => {

            this._model.findByIdAndUpdate(
                { _id: post._id }, { $set: post }, { new: true })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async search(attributes) {

        Object.assign(attributes, { ativo: true })

        return await new Promise((resolve, reject) => {

            this._model.find(
                attributes
            )
                .populate(['curso', 'usuario'])
                .then(success => {

                    if (success.length == 0)
                        success = 'Nenhum post encontrado!'

                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }

    async searchWithPagination(attributes) {

        Object.assign(attributes.body, { ativo: true })

        return await new Promise((resolve, reject) => {

            this._model.find(
                attributes.body
            )
                .populate(['curso', 'usuario']).skip(parseInt(attributes.inicio)).limit(parseInt(attributes.fim))
                .then(success => {

                    if (success.length == 0)
                        success = 'Nenhum post encontrado!'

                    return resolve(success)
                })
                .catch(error => {
                    return reject('Internal Server Error')
                })

        })
    }
}

module.exports = () => PostRepository