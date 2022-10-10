const express = require('express')
const settingController = require('../Controllers/settingController');
const settingRouter = express.Router();


settingRouter.post('/save', settingController.addSetting);
settingRouter.get('/show', settingController.showSetting);
settingRouter.post('/block', settingController.blockSite);
settingRouter.post('/redirect', settingController.redirectWebsite);
settingRouter.post('/iframe', settingController.embedIframe);
module.exports = settingRouter;