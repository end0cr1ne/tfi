var express = require('express');
var students = require('../public/javascripts/data').students;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Pavitra\'s Class',
        students: students
    });
});

module.exports = router;
