const bcrypt = require('bcrypt')

class UserRepository {

    constructor(model) {
        this._model = model
    }

    async create(user) {

        user.senha = await bcrypt.hash(user.senha, 10);

        return await new Promise((resolve, reject) => {

            this._model.create(user)
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

    async updateOne(user) {
        return await new Promise((resolve, reject) => {

            const { id, ...newUser } = user;

            user.data_modificacao = new Date;

            this._model.findByIdAndUpdate({ _id: id }, { $set: newUser }, { new: true })
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

    async authenticate(user) {


        return await new Promise((resolve, reject) => {

            this._model.findOne({ email: user.email }, { _id: 1, senha: 1 }).select('+senha')
                .then(success => {

                    if (success === null)
                        return reject('E-mail/Senha Inválidos')

                    bcrypt.compare(user.senha, success.senha, (err, res) => {

                        if (!res)
                            return reject('E-mail/Senha Inválidos')

                        if (res)
                            return resolve({ id: success._id })

                        if (err)
                            return reject(err)
                    });
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }
}

module.exports = () => UserRepository