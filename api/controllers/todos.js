var mongoose = require("mongoose");

var Todos = require('../models/todos');
var Tags = require('../models/tags');
var Categories = require('../models/categories');

exports.getAll = function(req, res, next) {
    var searchTerm = req.param('search');
    var criteria = {};
    if(searchTerm) {
        criteria = {"title": { "$regex": searchTerm, "$options": "i" }}; 
    }

    Todos.find(criteria)
        .populate("tags")
        .populate("category")
        .exec()
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

exports.get = function(req, res, next) {
    Todos.findById(req.params.todoId)
        .populate("tags")
        .populate("category")
        .exec()
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

exports.save = function(req, res, next) {
    var payload = req.body;
    if(!payload.tags.length) {
        return res.status(500).json({
            "error": "Please select at least one tag"
        });
    }
    payload._id = mongoose.Types.ObjectId();
    Todos.insertMany([payload])
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
};

exports.update = function(req, res, next) {
    var payload = req.body;
    var id = req.body.id;
    
    if(!payload.tags.length) {
        return res.status(500).json({
            "error": "Please select at least one tag"
        });
    }

    Todos.update({ _id: id }, { $set: payload })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
};

exports.delete = function(req, res, next) {
    Todos.findByIdAndDelete(req.params.todoId)
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
};