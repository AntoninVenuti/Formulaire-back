let express = require('express')
let router = express.Router()
let clients = require('./clients/client')

//Middlewares

router.use('/clients', clients)

module.exports = router;

