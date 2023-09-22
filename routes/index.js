const express = require('express');
const router = express.Router();
console.log("Router loaded");
const homeController = require('../controller/home_controller');




router.get('/', homeController.home);
router.use('/users', require('./users'));




module.exports = router;