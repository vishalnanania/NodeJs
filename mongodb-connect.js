const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb.');
    }
    console.log('connected to mongodb.');
    const db = client.db('TodoApp');
    
    db.collection('Todos').insertOne({
        text:'pay bills',
        complete: false
    }, (err, result)=>{
        if(err){
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    client.close();
});
