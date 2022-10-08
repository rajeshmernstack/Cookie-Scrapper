const express = require('express')
const settingController = require('../Controllers/settingController');
const settingRouter = express.Router();


settingRouter.get('/save', settingController.addSetting);
settingRouter.get('/show', settingController.showSetting);

module.exports = settingRouter;