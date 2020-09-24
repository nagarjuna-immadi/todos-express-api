var mongoose = require("mongoose");

var Tags = require('../models/tags');

exports.getAll = function(req, res, next) {
    Tags.find()
        .then(function(docs){
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(function(error){
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};