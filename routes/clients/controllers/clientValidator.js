let express = require('express')
let { check } = require('express-validator/check')
let waterfall = require('async-waterfall');
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

 // Fonction de validation des champs

exports.validation = function (req, res, next) {
    waterfall([
        
        // Verif du nom de famille

        function testlastName (callback) {
            if(req.body.lastName === undefined || req.body.lastName === ""){
                console.log("pas de lastName")
                callback('erreur')        
            } else { 
            console.log(req.body.lastName)
            callback(null)
            }
        },

        // Verif du prénom

        function testfirstName (callback) {
            if(req.body.firstName === undefined || req.body.firstName === ""){
                console.log("pas de firstName")
                callback('erreur')     
            } else { 
            console.log(req.body.firstName)
            callback(null)
            }
        },

        // Verif de l'adresse mail
        
        function testMail(callback) {
            if(req.body.username === undefined || req.body.username === ""){
                console.log("pas de mail")
                callback('erreur')   
            } else if (!regexMail.test(req.body.username)){ 
                console.log("adresse mail non valide")
                console.log(req.body.username)
                callback('erreur') 
            } else {
            console.log(req.body.username)
            callback(null)
            }
        },  
       

    ], function(error) {
        if (error) {
            res.status(400).send(error);
        } else {
            console.log('Réussi');
           next();
        }
    })
}

// Fonction générale pour la vérification de champs non remplis

function isEmpty(champ, callback){
    if(req.body.champ === undefined || req.body.champ === "") {
        console.log("pas de " + champ)
        callback('erreur, pas de ' + champ)
    } else {
        console.log(variable + " non valide")
        callback(null)
    }
}