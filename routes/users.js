var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user : {type: String, require: true, unique: true },
  password : {type: String, require: true},
  admin: Boolean
},{
  collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);



//for people who already have an account
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
//
//
// //create Schema
// var userSchema = new Schema({
//   user : {type: String, require: true, unique: true },
//   password : {type: String, require: true},
//   admin: Boolean
// });
//
// //create model to use it
// var User = mongoose.model('User', userSchema);
//
// module.exports = User;

// function checkUser(){
//
//   var user = document.getElementById('username').value;
//   var password = document.getElementById('password').value;
//   console.log("is it working?");
  //alert("username is: " + user + "\npassword is:" + password);

  // var MongoClient = require('mongodb').MongoClient;
  // var assert = require('assert');
  // var ObjectId = require('mongodb').ObjectID;
  // var url = 'mongodb://localhost/gymno';
  //
  // var findUser = function(db, callback){
  //   var cursor = db.collection('users').find();
  //   cursor.each(function(err,doc){
  //     assert.equal(err,null);
  //     if (doc != null){
  //       console.log(doc);
  //     } else{
  //       callback();
  //     }
  //   });
  // };
  //
  // MongoClient.connect(url, function(err, db) {
  //   assert.equal(null, err);
  //   findUser(db, function() {
  //       db.close();
  //   });
  // });



  // var MongoClient = require('mongodb').MongoClient;
  // var assert = require('assert');
  // var ObjectId = require('mongodb').ObjectID;
  // var url = 'mongodb://localhost/gymno';
  //
  // var findUser = function(db, callback) {
  //  var cursor =db.collection('users').find( );
  //  cursor.each(function(err, doc) {
  //     assert.equal(err, null);
  //     if (doc != null) {
  //        console.dir(doc);
  //     } else {
  //        callback();
  //     }
  //  });
//};



//}
