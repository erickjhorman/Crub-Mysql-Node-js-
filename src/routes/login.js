const express = require('express');
const router = express.Router(); // To add routes to use later 



const loginController = require('../controller/loginController');

router.get('/' , loginController.open);
module.exports = router;