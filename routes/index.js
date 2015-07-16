var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jon Davenport' });
});

router.get('/projectlist', function(req, res){
	var db = req.db;
	var collection = db.get('projectcollection');
	collection.find({},{},function(e,docs){
        res.render('projects', {
            "userlist" : docs
        });
    });
})


module.exports = router;
