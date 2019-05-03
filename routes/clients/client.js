let express = require('express')
let app = express();
let router = express.Router()
let clients = require('./controllers/clientController')
let validation = require('./controllers/clientValidator')
let { check } = require('express-validator/check')

// Routes vers le CRUD clients

router.get('/', clients.getClients);

router.post('/', clients.postClient);

router.put('/:id', clients.putClient);

router.delete('/:id', clients.deleteClient);

//Routes vers clientValidator

router.post('/test', validation.create);

/*router.post('/test', [
    check('lastName').isLength({ min: 3 }),
    check('firstName').isLength({ min: 5}),
    check('mail').isEmail()
  ], (req, res) => {
    const lastName  = req.body.lastName
    const firstName = req.body.firstName
    const mail = req.body.mail
  })*/



module.exports = router;


