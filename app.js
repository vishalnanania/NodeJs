console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var argv = yargs.argv;
var title = argv._[0];

if(title === 'add') {
    notes.addNote(argv.id, argv.title, argv.body)
}else if (title === 'list') {
    notes.getAll();
}else if (title === 'read') {
    notes.getNote(argv.id);
}else if (title === 'remove') {
    notes.removeNote(argv.id);
}else {
    console.log('command not recognized. e.g node app.js list,add,read,remove');
} 

