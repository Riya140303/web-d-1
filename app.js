//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please specify the name!"]
    },
    rating:{ type: Number,
    min:1,
    max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    
    rating: 9,
    review: "Healthy and tasty"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
        
});

const Person = mongoose.model("Person", personSchema);

const Banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Yummy!!!!"
});

Banana.save();

const person = new Person ({
    name: "Sankarshan",
    age: 19,
    favouriteFruit: Banana 
});

person.save();

const Mango = new Fruit({
    name: "mango",
    rating: 10,
    review: "Delicious"
});
const Orange = new Fruit({
    name: "orange",
    rating: 8,
    review: "Juicy & fruity"
});
const Jamun = new Fruit({
    name: "jamun",
    rating: 9,
    review: "Tasty!!"
});

Fruit.insertMany([Mango, Orange, Jamun,], function(err){
   if (err){
    console.log(err);
   }
   else{
    console.log("Successfully updated");
   }
});






// const findDocuments = function(db, callback) {
//     const collection = db.collection('fruits');
//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err,null);
//         console.log("Found the following records");
//         console.log(fruits)
//         callback(fruits);
//     });
// };

// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }
//     else{
//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);

        
//         });  
//     }
// });

    
    
// Fruit.updateOne({_id: "62d6975c884c862efcdce4d8"}, {name: "peach"}, function(err){
//     if (err){
//         console.log(err);

//     }
//     else {
//         console.log("Success1!!");
//     }
// });

//  Person.deleteMany({name: "Sankarshan"}, function(err){
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("Deleted!!!!");
//     }
//  });