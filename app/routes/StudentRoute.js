module.exports = app => {

    const usercontroller = new app.app.controllers.StudentController(
        new app.app.repositories.StudentRepository(
            app.app.models.UserModel))

    app.route('/aluno')
        .post((req, res) => {

            usercontroller.create(req.body)
                .then(success => res.status(201).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/user/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete user', href: `http://localhost:3000/user/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update user', href: `http://localhost:3000/user/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))

        })
}