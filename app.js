const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var argv = yargs
    .command('add', 'Add a new note', {
        id: {
            description: 'id of note',
            demand: true
        },
        title: {
            description: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            description: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('read', 'Read a new note', {
        id: {
            description: 'id of note',
            demand: true
        }
    })
    .command('remove', 'Remove a new note', {
        id: {
            description: 'id of note',
            demand: true
        }
    })
    .command('list', 'list out notes')    
    .argv;
var title = argv._[0];

if(title === 'add') {
    notes.addNote(argv.id, argv.title, argv.body);    
}else if (title === 'list') {
    notes.getAll(); 
}else if (title === 'read') {
    notes.getNote(argv.id);
}else if (title === 'remove') {
    notes.removeNote(argv.id);
}else {
    console.log('command not recognized. e.g node app.js list,add,read,remove');
} 

var orginalNote = {
    title: 'title',
    body: 'body'
}

