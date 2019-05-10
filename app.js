"use strict";
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let routes = require('./routes/routes')
const request = require('request')

//Variables du fichier de config (default)
const config = require('config')
let appKey = config.get('App-key')
let urlValue = config.get('url')
let headersValue = {
                    'Content-Type': 'application/json',
                    'X-Auth-App-Key': appKey
                   }
let qsValue = { customAttributeKey: '', customAttributeValue: '' }

//Middlewares

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//Routes

app.use('/', routes)

module.exports = app

app.listen(8080, function(){
  console.log(process.env.NODE_ENV);
});