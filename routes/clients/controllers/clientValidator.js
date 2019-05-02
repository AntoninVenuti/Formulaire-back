let express = require('express')
let { check, validationResult } = require('express-validator/check')

exports.validation = function (req,res,next) {
    
    if (check(req.body.lastName).isLength({min: 5})){
    /*if(req.body.lastName === undefined || req.body.lastName === ""){
        res.send("Veuillez renseigner votre nom de famille")        
    } else { 
    res.send('Votre nom de famille est renseigné')
    console.log(req.body.lastName)
    next();*/
    res.send('plus long que deux')
    } else {
        res.send('trop court (moins que deux)')
    }

}

