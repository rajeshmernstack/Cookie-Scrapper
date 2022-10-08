const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);



const ScreenshotSchema = new mongoose.Schema({
    screenshotURI: String
})
const MyScreenshot = mongoose.model("Screenshots", ScreenshotSchema);

module.exports = MyScreenshot;