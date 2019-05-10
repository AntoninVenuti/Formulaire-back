let request = require('request')
let config = require('config')
let appKey = config.get('App-key')
let urlValue = config.get('url')
let headersValue = {
                    'Content-Type': 'application/json',
                    'X-Auth-App-Key': appKey
                   }
let qsValue = { customAttributeKey: '', customAttributeValue: '' }


getClients = function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
}


exports.getClients = function(req, res) {

    res.send('Le getClient fonctionne')

}



exports.postClient = function(req, res) {

    console.log("Le post fonctionne");
    res.send('Le post à fonctionné !')
}



exports.putClient = function(req, res) {

    res.send('Le putClient fonctionne');

}

exports.deleteClient = function(req, res) {

    res.send('Le deleteClient fonctionne');
    
}