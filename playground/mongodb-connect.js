//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//
//var obj = new ObjectID();
//console.log(obj);
//



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connec to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert too', err)
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//        
//    })
//    db.collection('Users').insertOne({
//        name: 'Anthony',
//        age: 45,
//        location: 'Arizona'
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert', err);
//        }
//        console.log(result.ops[0]._id.getTimestamp());
//    })
    
    db.close();
});