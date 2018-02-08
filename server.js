const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname, + '/public'));

app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res)=>{
    res.send({
        error: 'Bad request',
    })
});

app.listen(3001, ()=>{
    console.log('Server is running at port 3001.');
});