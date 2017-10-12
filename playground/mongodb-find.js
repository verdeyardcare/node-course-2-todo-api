//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connec to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').find({
//        id: new ObjectID('59dfb41a8691f51d746b8227')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    })
//    db.close();
    
//        db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    })
    db.collection('Users').find({
        name: 'Anthony'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
    
});