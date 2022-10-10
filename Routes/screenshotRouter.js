const express = require('express')
const screenshotController = require('../Controllers/screenshotController');
const screenshotRouter = express.Router();


screenshotRouter.get('/all', screenshotController.allScreenshots);
screenshotRouter.post('/save', screenshotController.saveScreenshot);
screenshotRouter.get('/delete/screenshotid', screenshotController.deleteScreenshot);

module.exports = screenshotRouter;