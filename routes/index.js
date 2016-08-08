var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  // Render the homepage and send a json object with title corresponding to 'home'
  res.render('index', {title: 'gymno'});
});

module.exports = router;
