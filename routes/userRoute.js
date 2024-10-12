const express = require('express');
const controller = require('../controllers/userController.js');
const route = express();

route.get('/',controller.defaults);
route.post('/register',controller.register);
route.post('/login',controller.login);
route.get('/logout',controller.logout);

module.exports = route