
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connec to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID("59dfdb5a2c7099b5b7b41927")
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59dfb6995783d41d60e3ca9a")
    },{
        $set: {
            name: "Bob"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log((result));
    })

//    db.close();
});