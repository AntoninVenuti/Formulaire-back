let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let routes = require('./routes/routes')

//Middlewares

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//Routes

app.get('/', (req, res) => {

  res.send("Bienvenue sur app.js");

})

//Vers routes.js

app.use('/routes', routes)

module.exports = app

app.listen(8080)