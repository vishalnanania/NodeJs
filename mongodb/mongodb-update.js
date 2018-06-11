const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    // find one and update
    db.collection('Todos').findOneAndUpdate({
        completed: false
    }, {
        $set: {
            completed: true
        }    
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});