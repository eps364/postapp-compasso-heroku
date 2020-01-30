class CourseController {


    constructor(repository) {
        this._repository = repository
    }

    async create(curso) {

        return await new Promise((resolve, reject) => {

            this._repository.create(curso)
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
                    console.log(error)
                    return reject(error)
                })

        })
    }

    async update(curso) {

        return await new Promise((resolve, reject) => {

            this._repository.update(curso)
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

module.exports = () => CourseController