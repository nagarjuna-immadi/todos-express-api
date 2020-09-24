var mongoose = require('mongoose');
var Category = require('../models/categories');

mongoose.connect("mongodb://localhost/todos");

mongoose.connection.on('open', function () {
   console.log("Database connected"); 
});

var categories = [
    {name: "Home"},
    {name: "Work"},
    {name: "Personal"},
    {name: "Social"},
    {name: "Bill Payments"}
];

Category.insertMany(categories, function(error, docs){
    console.log(error);
    console.log(docs);
});