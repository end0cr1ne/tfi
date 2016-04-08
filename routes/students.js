var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/data');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(data.students);
});

router.get('/avg', function (req, res, next) {
    res.json(data.average);
});


router.get('/:id', function (req, res, next) {
    res.json(data.students.filter(function (data) {
        return !data.name.localeCompare(req.params.id)
    })[0]);
});

router.get('/sex/:id', function (req, res, next) {
    res.json(data.students.filter(function (data) {
        return !data.sex.localeCompare(req.params.id)
    }));
});


router.get('/rc/:id', function (req, res, next) {
    console.log(req.params.id);

    if (req.params.id)
        res.json(data.students.map(function (data) {
            return {
                name: data.name,
                rc: data.rc[req.params.id]
            };
        }));
    else
        res.json(data.students.map(function (data) {
            return {
                name: data.name,
                rc: data.rc
            };
        }));
});

router.get('/mm/:id', function (req, res, next) {
    if (req.params.id)
        res.json(data.students.map(function (data) {
            return {
                name: data.name,
                mm: data.mm[req.params.id]
            };
        }));
    else
        res.json(data.students.map(function (data) {
            return {
                name: data.name,
                mm: data.mm
            };
        }));
});

router.get('/sex/:id', function (req, res, next) {
    res.json(data.students.filter(function (data) {
        return !data.sex.localeCompare(req.params.id)
    }));
});

module.exports = router;
