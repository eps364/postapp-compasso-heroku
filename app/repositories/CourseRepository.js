class CourseRepository {

    constructor(model) {
        this._model = model
    }

    async create(curso) {
        return await new Promise((resolve, reject) => {

            this._model.create(curso)
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

            this._model.find(
                {
                    ativo: true
                })
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

            this._model.updateOne(
                { _id: id },
                { ativo: false })
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
            this._model.find(
                {
                    _id: id,
                    ativo: true
                })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async update(curso) {
        return await new Promise((resolve, reject) => {

            const { id, ...newCurso } = curso

            this._model.findByIdAndUpdate({_id: id}, { $set: newCurso}, {new: true} )
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }
}

module.exports = () => CourseRepository