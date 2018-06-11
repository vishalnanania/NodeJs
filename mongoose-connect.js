var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

var newTodo = new Todo({
    text: 'eat lunch',
    completed: true, 
    completedAt: 123
});

newTodo.save().then((doc)=>{
    console.log('save todo:', doc)
},(e)=>{
    console.log('unable to save todo', e.message);
})