console.log('Starting app.js');

const _ = require('lodash');
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
// var filteredArray = _.uniq(['Andrew',1,1,1,'Andrew',2,4,3,2,3,4]);
// console.log(filteredArray);

var command = process.argv[2];

if(command === 'add') {
    console.log('Adding new note');
}else if (command === 'list') {
    console.log('listing all notes');
}else if (command === 'read') {
    console.log('Reading notes');
}else if (command === 'remove') {
    console.log('Removing note');
}else {
    console.log('command not recognized. e.g node app.js list,add,read,remove');
} 