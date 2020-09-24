var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var delay = require('express-delay');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

var app = new express();
var TodosRoutes = require('./api/routes/todos');
var CategoryRoutes = require('./api/routes/categories');
var TagsRoutes = require('./api/routes/tags');

app.use(delay(500));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todos");

mongoose.connection.on('open', function () {
   console.log("Database connected"); 
});

mongoose.connection.on('error', function () {
    console.log("Error in connecting database"); 
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get("/", function(req, res){
    res.send("Welcome to todos-api....!");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/todos', TodosRoutes);
app.use('/categories', CategoryRoutes);
app.use('/tags', TagsRoutes);

module.exports = app;