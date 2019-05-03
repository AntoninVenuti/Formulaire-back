let express = require('express')
let { check } = require('express-validator/check')
let waterfall = require('async-waterfall');
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

/*exports.validation = function (req,res,next) {
    
    if(req.body.lastName === undefined || req.body.lastName === ""){
        res.send("Veuillez renseigner votre nom de famille")        
    } else { 
    res.send('Votre nom de famille est renseigné')
    console.log(req.body.lastName)
    next();
    res.send('plus long que deux')
    } else {
        res.send('trop court (moins que deux)')
    }
    }
}*/

exports.create = function (req, res, next) {
    waterfall([
        truc,
        
        function testlastName (callback) {
            if(req.body.lastName === undefined || req.body.lastName === ""){
                console.log("pas de lastName")
                callback('erreur')        
            } else { 
            console.log(req.body.lastName)
            callback(null)
            }
        },
        function testfirstName (callback) {
            if(req.body.firstName === undefined || req.body.firstName === ""){
                console.log("pas de firstName")
                callback('erreur')     
            } else { 
            console.log(req.body.firstName)
            callback(null)
            }
        },
        function testMail(callback) {
            if(req.body.mail === undefined || req.body.mail === ""){
                console.log("pas de mail")
                callback('erreur')   
            } else { 
            console.log(req.body.mail)
            callback(null)
            }
        },
        function testRegexMail(callback) {
            if(!regexMail.test(req.body.mail)){
            //if(check(req.body.mail).isEmail()){
                console.log("adresse mail non valide")
                callback('erreur')   
            } else { 
                console.log(req.body.mail)
                callback(null)
            }
        },
        
    ], function(error) {
        if (error) {
            res.status(400).send(error);
        }else {
            console.log('ICI');
            res.status(200).send("tout est correct");
        }
    })
}

function truc(callback) {
    callback(null);
}

