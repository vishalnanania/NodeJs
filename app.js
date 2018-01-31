console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var argv = yargs.argv;
var title = argv._[0];
debugger;
if(title === 'add') {
    if(_.keys(argv).length == 7){
        notes.addNote(argv.id, argv.title, argv.body);
    }else{
        console.log("try: node app.js add --id='3' --title='title' --body='msg'");
    }    
}else if (title === 'list') {
    if(_.keys(argv).length == 4){
        notes.getAll();
    }else{
        console.log("try: node app.js list");
    } 
}else if (title === 'read') {
    if(_.keys(argv).length == 5){
        notes.getNote(argv.id);
    }else{
        console.log("try: node app.js read --id='id'");
    }
}else if (title === 'remove') {
    if(_.keys(argv).length == 5){
        notes.removeNote(argv.id);
    }else{
        console.log("try: node app.js remove --id='id'");
    }
}else {
    console.log('command not recognized. e.g node app.js list,add,read,remove');
} 

var orginalNote = {
    title: 'title',
    body: 'body'
}

