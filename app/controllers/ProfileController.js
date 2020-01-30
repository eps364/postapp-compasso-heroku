class ProfileController {

    constructor(repository) {
        this._repository = repository
    }

    async create(profile) {

        return await new Promise((resolve, reject) => {

            this._repository.create(profile)
                .then((success) => {
                    return resolve(success)
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
                    return reject(error)
                })

        })
    }

    async update(profile) {

        return await new Promise((resolve, reject) => {

            this._repository.update(profile)
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
module.exports = () => ProfileController