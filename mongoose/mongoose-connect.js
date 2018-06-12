var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo')
// var newTodo = new Todo({
//     text: 'eat lunch',
//     completed: true, 
//     completedAt: 123
// });

// newTodo.save().then((doc)=>{
//     console.log('save todo:', doc)
// },(e)=>{
//     console.log('unable to save todo', e.message);
// });

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text,
        completed: false, 
    });

    newTodo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.send(e);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});