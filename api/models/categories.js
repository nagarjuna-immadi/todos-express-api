var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: 'string'
});

module.exports = mongoose.model("Category", categorySchema);