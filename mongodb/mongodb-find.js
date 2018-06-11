const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    // find
    // db.collection('Todos').find().toArray().then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('unable to fetch todos.');
    // });
    // find with query
    // db.collection('Todos').find({completed: true}).toArray().then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('unable to fetch todos.');
    // });
    // find with id
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b1ea9cd6956c70ae80ed611')
    // }).toArray().then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('unable to fetch todos.');
    // });
    // find with count
    db.collection('Todos').find().count().then((result) => {
        console.log('Todos:', result);
    }, (err) => {
        console.log('unable to fetch todos.');
    });

    client.close();
});