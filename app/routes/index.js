const PostRoute = require('./PostRoute')
const UserRoute = require('./UserRoute')
const ProfileRouter = require('./ProfileRoute')
const CourseRouter = require('./CourseRouter')
const StudentRouter = require('./StudentRoute')
const AuthenticateRoute = require('./AuthenticateRoute')

module.exports = app => {
    AuthenticateRoute(app)
    PostRoute(app)
    UserRoute(app)
    ProfileRouter(app)
    CourseRouter(app)
    StudentRouter(app)
}