const mongoose = require('mongoose');
mongoose.connect('mongodb://68613487d8dc10ba6db6d4be52bcc703:cookie-scrapper123@15a.mongo.evennode.com:27019,15b.mongo.evennode.com:27019/68613487d8dc10ba6db6d4be52bcc703?replicaSet=eu-15&authMechanism=DEFAULT&authSource=68613487d8dc10ba6db6d4be52bcc703');



const ScreenshotSchema = new mongoose.Schema({
    screenshotURI: String
})
const MyScreenshot = mongoose.model("Screenshots", ScreenshotSchema);

module.exports = MyScreenshot;