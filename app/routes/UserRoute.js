module.exports = app => {

    const usercontroller = new app.app.controllers.UserController(
        new app.app.repositories.UserRepository(
            app.app.models.UserModel))

    app.route('/user')
        .post((req, res) => {

            usercontroller.create(req.body)
                .then(success => res.status(201).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/user/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete user', href: `http://localhost:3000/user/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update user', href: `http://localhost:3000/user/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))

        })
        .get((req, res) => {

            usercontroller.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

    app.route('/user/:id')
        .get((req, res) => {

            usercontroller.findById(req.params.id)
                .then(success => res.status(200).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/user/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete user', href: `http://localhost:3000/user/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update user', href: `http://localhost:3000/user/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            usercontroller.delete(req.params.id)
                .then(success => res.status(200).json(success, [
                    { rel: "list", method: "GET", href: `http://localhost:3000/user` },
                    { rel: "create", method: "POST", title: 'Delete user', href: `http://localhost:3000/user` },
                ]))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            req.body.id = req.params.id;

            usercontroller.update(req.body)
                .then(success => res.status(200).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/user/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete user', href: `http://localhost:3000/user/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update user', href: `http://localhost:3000/user/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))
        })
}