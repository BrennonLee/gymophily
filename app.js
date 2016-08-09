
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var router = require('express').Router();

//Retrieve
var mongodb = require('mongodb');
var app = express();
var live_url = " mongodb://<dbuser>:<dbpassword>@ds147985.mlab.com:47985/gymno";
//var url = "mongodb://localhost/gymno"
mongodb.connect(live_url, null, function(err, db){
  if (err){
    console.error("failed to connect to db: ", err);
  }else

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

    // Create session for each user
    app.use(session({
      secret: 'boulder',
      resave: true,
      saveUninitialized: true,
      username: ''
    }));
    //allow app to use html, css, and images
    app.use(function(req, res, next){
      req.db = db;
      res.locals.username = req.session.username;
      next();
    });
    app.use(express.static('views'));
    app.use(express.static(path.join(__dirname, 'public')));


    //engine
    app.set('views', __dirname + '/views');
    //app.engine('html', require('ejs').renderFile);
    //app.set('view engine', 'ejs');
    app.set('view engine', 'jade');

    // app.get('/login', function(req, res) {
    //   res.render(__dirname + '/views/login.html', {
    //     string: 'random_value',
    //     other: 'value'
    //   });
    // });


    // Link routes for each webpage
    var index = require('./routes/index');
    var createAcc = require('./routes/createAcc');
    var login = require('./routes/login');
    var stretch = require('./routes/stretch');
    var week1 = require('./routes/week1');
    var yourwrk = require('./routes/yourwrk');

    //allow app to access route files
    app.use('/', index);
    app.use('/', createAcc);
    app.use('/', login);
    app.use('/', stretch);
    app.use('/', week1);
    app.use('/', yourwrk);

    var port = (process.env.PORT || 5000);
    app.listen((process.env.PORT || 5000), function() {
      console.log('Node app is running on port', port);
    })
});


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler, will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler, no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });




//search database

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


//create Schema

// var User = require('../user');
//
// exports.create(req, res, next){
//   var newUser = new User(req.body);
//
//   newUser.save(function (err) {
//       if (err)
//         return next(err);
//       res.json({
//         message: 'User created'
//       });
//   });
// }
//
// exports.listAll (req, res, next) {
//   User.find({}, function (err, users) {
//       if (err)
//         return next(err);
//       res.json(users)
//   });
// }
//
// exports.getById (req, res, next) {
//   User.findById(req.params.id, function (err, user) {
//       if (err)
//         return next(err);
//       res.json(user)
//   });
// }


// var userSchema = new Schema({
//   user : {type: String, require: true, unique: true },
//   password : {type: String, require: true},
//   admin: Boolean
// });

//create model to use it
// var User = mongoose.model('User', userSchema);
//
// module.exports = User;

//---------------
//var User = require('./users');

// var chris = new User({
//   user: 'chris',
//   password: 'password'
// });
//
// chris.save(function(err){
//   if(err) throw err;
//   console.log('user saved successful');
// });



//starting app



module.exports = app;
