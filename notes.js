console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        return notes = JSON.parse(fs.readFileSync('notes.json'));
    }catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
};

var addNote = (id, title, body) => {
    var notes = fetchNotes();
    var note = {
        id,
        title,
        body
    };
    var duplicateNote = notes.filter(note=>note.id == id);
    if(duplicateNote.length <=0){
        notes.push(note);
        saveNotes(notes);
        console.log('Adding note:', 'id:',id, 'title:', title, 'body:', body);
    }else{
        console.log('This is duplicate note. Please add note with different id.');
    }
};

var getAll = () => {
    var notes = fetchNotes();
    console.log('Getting all notes:', notes);
};

var getNote = (id) => {
    var notes = fetchNotes();
    var noteById = notes.filter((note)=>{
        return note.id === id; 
    });
    console.log('Getting note by id:', noteById);
};

var removeNote = (id) => {
    var notes = fetchNotes();
    var noteById = notes.filter((note,index)=>{
        if(note.id === id){
            notes.splice(index,1);
            saveNotes(notes);
            return note;
        } 
    });
    if(noteById.length>0){
        console.log('Removed note by:',noteById);
    }else{
        console.log(id,"Not available");
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};