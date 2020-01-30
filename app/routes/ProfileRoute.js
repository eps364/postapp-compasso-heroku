module.exports = app => {

    const profilecontroller = new app.app.controllers.ProfileController(
        new app.app.repositories.ProfileRepository(
            app.app.models.ProfileModel))

    app.route('/perfil')
        .post((req, res) => {
            profilecontroller.create(req.body)
                .then(success => res.status(200).json(success, [{
                        rel: "self",
                        method: "GET",
                        href: `http://localhost:3000/perfil/${success._id}`
                    },
                    {
                        rel: "delete",
                        method: "DELETE",
                        title: 'Delete perfil',
                        href: `http://localhost:3000/perfil/${success._id}`
                    },
                    {
                        rel: "update",
                        method: "PUT",
                        title: 'Update perfil',
                        href: `http://localhost:3000/perfil/${success._id}`
                    }
                ]))
                .catch(error => res.status(500).json(error))
        })
        .get((req, res) => {

            profilecontroller.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

    app.route('/perfil/:id')
        .get((req, res) => {

            profilecontroller.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            profilecontroller.delete(req.params.id)
                .then(success => res.status(204).json('Perfil excluido com sucesso'))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {
            req.body.id = req.params.id;
            profilecontroller.update(req.body)
                .then(success => res.status(200).json(success, [{
                        rel: "self",
                        method: "GET",
                        href: `http://localhost:3000/perfil/${success._id}`
                    },
                    {
                        rel: "delete",
                        method: "DELETE",
                        title: 'Delete profile',
                        href: `http://localhost:3000/perfil/${success._id}`
                    },
                    {
                        rel: "update",
                        method: "PUT",
                        title: 'Update profile',
                        href: `http://localhost:3000/perfil/${success._id}`
                    }
                ]))
                .catch(error => res.status(500).json(error))
        })

}