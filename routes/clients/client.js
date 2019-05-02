let express = require('express')
let router = express.Router()
let clients = require('./controllers/clientController')
let validation = require('./controllers/clientValidator')

// Routes vers le CRUD clients

router.get('/', clients.getClients);

router.post('/', clients.postClient);

router.put('/:id', clients.putClient);

router.delete('/:id', clients.deleteClient);

//Routes vers clientValidator

router.post('/test', validation.validation);



module.exports = router;


