var express = require('express');
var router = express.Router();

// GET home page.
router.get('/stretch', function(req, res, next) {
  // Render the stretch and send a json object with title corresponding to 'home'
  res.render('stretch', {title: 'gymno'});
});

module.exports = router;
