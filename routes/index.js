const express = require('express');
const router = express.Router();
console.log("Router loaded");
const homeController = require('../controller/home_controller');




router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comment'));
router.use('/likes', require('./likes'));


module.exports = router;