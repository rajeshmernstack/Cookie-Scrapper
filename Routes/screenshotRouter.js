const express = require('express')
const screenshotController = require('../Controllers/screenshotController');
const screenshotRouter = express.Router();


screenshotRouter.get('/all', screenshotController.allScreenshots);
screenshotRouter.get('/delete/screenshotid', screenshotController.deleteScreenshot);

module.exports = screenshotRouter;