class StudentController {

    constructor(repository) {
        this._repository = repository
    }

    async create(student) {

        return await new Promise((resolve, reject) => {

            this._repository.create(student)
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

    async update(student) {

        return await new Promise((resolve, reject) => {

            this._repository.updateOne(student)
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
module.exports = () => StudentController