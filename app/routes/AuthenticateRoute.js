const jwt = require('jsonwebtoken')

module.exports = app => {

    const autcontroller = new app.app.controllers.AuthenticateController(
        new app.app.repositories.UserRepository(
            app.app.models.UserModel),
        jwt
    )

    app.post('/authenticate', (req, res) => {

        autcontroller.authenticate(req.body)
            .then(success => res.status(200).send(success))
            .catch(error => res.status(500).send(error))

    })

    //Validando token
    app.use('/', (req, res, next) => {

        autcontroller.validaExcecao(req)
            .then(success => {

                if (success)
                    next()

                if (!success)
                    autcontroller.verify(req)
                        .then(success => next())
                        .catch(error => res.status(500).send(error))
            })
    })
}