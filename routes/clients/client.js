"use strict";
const express = require('express')
const router = express.Router()
const clients = require('./controllers/clientController')
const validation = require('./controllers/clientValidator')
const { check } = require('express-validator/check')
const request = require('request')


router.get('/', clients.getClients)

router.post('/', validation.validation, clients.postClient);

router.put('/:id', clients.putClient);

router.delete('/:id', clients.deleteClient);

module.exports = router;


