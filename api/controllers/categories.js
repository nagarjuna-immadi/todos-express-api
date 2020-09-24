var mongoose = require("mongoose");

var Categories = require('../models/categories');

exports.getAll = function(req, res, next) {
    Categories.find()
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