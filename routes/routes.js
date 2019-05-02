let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let router = express.Router()
let clients = require('./clients/client')

//Middlewares

router.get('/', function(req, res){

    res.send('La page de routes')

})

router.use('/clients', clients)

module.exports = router;

