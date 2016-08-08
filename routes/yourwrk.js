var express = require('express');
var router = express.Router();

router.post('/getData', function (req, res){
  var username = req.body.username;
  //search request to pull user data
  req.db.collection('users').find({"user": username}).toArray(function (err, doc){
    if(doc.length == 0){
      res.json({success: false, error: true});
      res.end();
   }else{
     res.json({success: true, docdata: doc});
     res.end();
   }
  });
});

// GET home page.
router.get('/yourwrk', function(req, res, next) {
  // Render the homepage and send a json object with title corresponding to 'home'
  res.render('yourwrk', {title: 'gymno'});
});

module.exports = router;
