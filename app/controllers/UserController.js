class UserController {

    constructor(repository) {
        this._repository = repository
    }

    async create(user) {

        return await new Promise((resolve, reject) => {

            this._repository.create(user)
                .then(result => {
                    return resolve(result)
                })
                .catch(error => {
                    console.log(error)
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
                    console.log(error)
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
                    console.log(error)
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
                    console.log(error)
                    return reject(error)
                })

        })
    }

    async update(user) {

        return await new Promise((resolve, reject) => {

            this._repository.updateOne(user)
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    console.log(error)
                    return reject(error)
                })

        })
    }

}
module.exports = () => UserController