var express = require('express');
var router = express.Router();

// GET home page.
router.get('/week1', function(req, res, next) {
  // Render the week1 and send a json object with title corresponding to 'home'
  res.render('week1', {title: 'gymno'});
});

module.exports = router;
