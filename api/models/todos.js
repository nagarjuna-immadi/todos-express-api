var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    targetDate: { type: Date, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId , ref: "Tags",required: true }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

module.exports = mongoose.model("Todos", todoSchema);