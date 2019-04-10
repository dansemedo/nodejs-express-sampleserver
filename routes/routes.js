var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
  });
  
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our rest video api!' });  
  });


  router.route('/pitometer').post(function(req, res) {
    var name = req.body.name;

    var newname = name + "  daniel";

    res.send(newname);
});

module.exports.router = router;