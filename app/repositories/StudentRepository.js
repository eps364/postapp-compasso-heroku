class StudentRepository {

    constructor(model) {
        this._model = model
    }

    async create(student) {
        return await new Promise((resolve, reject) => {

            this._model.create(student)
                .then(sucesso => {
                    return resolve(sucesso)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async find() {
        return await new Promise((resolve, reject) => {
            this._model.find()
                .populate([ 
                        { 
                            path: 'curso', select: 'nome'
                        },
                        {
                            path: 'perfil', select: 'nome'
                        }
                ])
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
            this._model.updateOne({
                _id: id
            }, {
                $set: {
                    ativo: false,
                    data_modificacao: new Date
                }
            })
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async updateOne(student) {
        return await new Promise((resolve, reject) => {
            
             const { id, ...newUser } = student;       

             student.data_modificacao = new Date;

            this._model.findByIdAndUpdate({ _id: id }, { $set: newUser },{ new: true })
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

            this._model.findById(id)
                .populate([ 
                    { 
                        path: 'curso', select: 'nome'
                    },
                    {
                        path: 'perfil', select: 'nome'
                    }
                ])
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async authenticate(student) {

        return await new Promise((resolve, reject) => {

            this._model.findOne({
                email: user.email,
                senha: user.senha,
                ativo: true
            },
                {
                    _id: 1
                })
                .then(success => {

                    if (success === null)
                        return reject('Nenhum usuario encontrado')

                    return resolve({ success })
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }
}

module.exports = () => StudentRepository