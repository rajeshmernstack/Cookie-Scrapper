const express = require('express')
const settingController = require('../Controllers/settingController');
const settingRouter = express.Router();


settingRouter.get('/save', settingController.addSetting);

module.exports = settingRouter;