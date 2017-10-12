//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connec to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany
//    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//        console.log(result);
//    })
    
    //deleteOne
//    db.collection('Todos').deleteOne({text: 'eat lunch'}). then((result) => {
//        console.log(result);
//    })
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false }).then((result) => {
//        console.log((result));
//    })
    
//    db.collection('Users').deleteMany({name: 'Anthony'}).then((result) => {
//        console.log((result))
//                    });
//    
    db.collection('Users').deleteOne({_id: 123}).then((result) => {
        console.log((result));
    });
    
//    db.close();
});