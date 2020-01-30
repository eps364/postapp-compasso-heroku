class AuthenticateController {

    constructor(repository, jwt) {
        this._repository = repository
        this._jwt = jwt
    }

    async authenticate(user) {

        return await new Promise((resolve, reject) => {

            this._repository.authenticate(user)
                .then(success => {

                    const token = this._jwt.sign(success, process.env.SECRET, {
                        expiresIn: 84600 // expires in 5min
                    });

                    return resolve({ auth: true, token: token })

                })
                .catch(error => {
                    return reject(error);
                })
        })

    }

    async verify(req) {

        return new Promise((resolve, reject) => {

            let token = req.headers['x-access-token'];

            if (!token)
                return reject({ auth: false, message: 'No token provided.' })

            this._jwt.verify(token, process.env.SECRET, function (err, decoded) {

                if (err)
                    return reject({ auth: false, message: 'Failed to authenticate token.' })

                req.userId = decoded.id

                //console.log(req.userId)

                return resolve()
            });

        })
    }

    async validaExcecao(req) {

        return await new Promise((resolve, reject) => {

            const urls = [{
                url: '/aluno',
                method: 'POST'
            }]

            urls.forEach(u => {
                if (u.method === req.method && u.url === req.url)
                    return resolve(true)
            })

            return resolve(false)

        })
    }

}
module.exports = () => AuthenticateController