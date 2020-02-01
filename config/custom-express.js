const express = require('express')
const consign = require('consign')
const express_hateoas_links = require('express-hateoas-links')
const mongoose_connect = require('./mongoose-connect')
const routes = require('../app/routes')

//Variaveis de ambiente
if(process.env.NODE_ENV !== 'production') require("dotenv-safe").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express_hateoas_links)

//Conecting with database
mongoose_connect()

consign()
    .include('./app/models')
    .then('./app/repositories')
    .then('./app/controllers')
    .into(app)

//Routes
routes(app)

module.exports = app
