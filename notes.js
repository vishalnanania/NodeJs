console.log('starting notes.js');

var addNote = (id, title, body) => {
    console.log('Adding note:', 'id:',id, 'title:', title, 'body:', body);
};
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (id) => {
    console.log('Getting note',id);
}
var removeNote = (id) => {
    console.log('Removing note',id);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};