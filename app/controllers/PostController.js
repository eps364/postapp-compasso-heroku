class PostController {

    constructor(repository) {
        this._repository = repository
    }

    async create(post) {

        return await new Promise((resolve, reject) => {

            this._repository.create(post)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }


    async find() {
        return await new Promise((resolve, reject) => {
            this._repository.find()
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async findWithPagination(attributes) {

        return await new Promise((resolve, reject) => {

            this._repository.findWithPagination(attributes)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async delete(id) {

        return await new Promise((resolve, reject) => {

            this._repository.delete(id)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async findById(id) {

        return await new Promise((resolve, reject) => {

            this._repository.findById(id)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async update(post) {

        return await new Promise((resolve, reject) => {

            this._repository.update(post)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async search(attributes) {

        return await new Promise((resolve, reject) => {

            this._repository.search(attributes)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async searchWithPagination(attributes) {

        return await new Promise((resolve, reject) => {

            this._repository.searchWithPagination(attributes)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

}
module.exports = () => PostController