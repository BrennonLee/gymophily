var express = require('express');
var router = express.Router();


router.post('/login', function (req, res){
      var username = req.body.username;
      var password = req.body.password;
      req.db.collection('users').find({$and: [{"user": username},{"password": password}]}).toArray(function (err, doc){
           if(doc.length == 0){
             res.json({success: false, error: true});
             res.end();
          }else{
            req.session.username = username;
            req.session.save();
            res.json({success: true, error: false});
            res.end();
          }
       });

});


// GET home page.
router.get('/login', function(req, res) {
  if (req.session.username == undefined){
    res.render('login', {title: 'gymno'});
  }else{
    req.session.destroy(function(){
      res.redirect('/');
    })
  }
});


module.exports = router;
