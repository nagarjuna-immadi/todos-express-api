var mongoose = require('mongoose');

var tagsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: 'string'
});

module.exports = mongoose.model("Tags", tagsSchema);