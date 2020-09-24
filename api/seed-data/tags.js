var mongoose = require('mongoose');
var Tags = require('../models/tags');

mongoose.connect("mongodb://localhost/todos");

mongoose.connection.on('open', function () {
   console.log("Database connected"); 
});

var tagsData = [
    {name: "Important"},
    {name: "Urgent"}
];

Tags.insertMany(tagsData, function(error, docs){
    console.log(error);
    console.log(docs);
});