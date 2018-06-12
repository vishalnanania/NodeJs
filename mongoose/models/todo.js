var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1, 
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    completedAt: {
        type: Number
    }
});

module.exports = {
    Todo
}