const express = require('express')
const cookieController = require('../Controllers/cookieController');
const cookieRouter = express.Router();


cookieRouter.get('/all', cookieController.allCookies);
cookieRouter.get('/delete/:cookieid', cookieController.deleteCookie);
cookieRouter.get('/save', cookieController.saveCookie);

module.exports = cookieRouter;