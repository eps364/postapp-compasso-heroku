
module.exports = app => {

    const courseController = new app.app.controllers.CourseController(
        new app.app.repositories.CourseRepository(
            app.app.models.CourseModel)) 
      
    app.route('/cursos')
        .post((req, res) => {

            courseController.create(req.body)
                .then(success => res.status(201).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/cursos/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete Course', href: `http://localhost:3000/cursos/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update Course', href: `http://localhost:3000/cursos/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))
        })
        .get((req, res) => {

            //console.log(req.userId)

            courseController.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))

       })


    app.route('/cursos/:id')
        .get((req, res) => {
            courseController.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            courseController.delete(req.params.id)
                .then(success => res.status(200).json('Curso excluido com sucesso'))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            req.body.id = req.params.id;

            courseController.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
}
