var express = require('express');
var router = express.Router();

// GET home page.
router.get('/createAcc', function(req, res, next) {
  // Render the createAcc and send a json object with title corresponding to 'home'
  res.render('createaccount', {title: 'gymno'});
});

module.exports = router;
