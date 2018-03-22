'use strict';

var express = require('express');
var controller = require('./key.controller');

var router = express.Router();
//auth.hasRole('admin'),
router.get('/',  controller.getKeys);
router.post('/', controller.generateKeys);
router.post('/verify', controller.useKey );


module.exports = router;