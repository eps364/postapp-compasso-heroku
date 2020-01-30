module.exports = app => {

    const postcontroller = new app.app.controllers.PostController(
        new app.app.repositories.PostRepository(
            app.app.models.PostModel))

    app.route('/posts')
        .post((req, res) => {

            //console.log(req.userId)

            postcontroller.create(req.body)
                .then(success => res.status(201).json(success, [
                    { rel: "self", method: "GET", href: `http://localhost:3000/posts/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete Post', href: `http://localhost:3000/posts/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update Post', href: `http://localhost:3000/posts/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))

        })
        .get((req, res) => {

            if (req.body.search == undefined) {

                postcontroller.find()
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))

            } else {

                postcontroller.search(req.body.search)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            }
        })

    app.route('/posts/pagination/:inicial/:final')
        .get((req, res) => {

            const pagination = {
                inicio: req.params.inicial,
                fim: req.params.final
            }

            if (req.body.search == undefined) {

                postcontroller.findWithPagination(pagination)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))

            } else {

                pagination.body = req.body.search

                postcontroller.searchWithPagination(pagination)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            }
        })

    app.route('/posts/:id')
        .get((req, res) => {

            postcontroller.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            postcontroller.delete(req.params.id)
                .then(success => res.status(204).json(success))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            postcontroller.update(req.body)
                .then(success => res.status(204).json(success))
                .catch(error => res.status(500).json(error))
        })

}