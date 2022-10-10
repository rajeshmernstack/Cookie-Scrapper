const MyScreenshot = require('../Models/ScreenshotModel');

const allScreenshots = async(req, res) => {
    await MyScreenshot.find({}, function (err, screenshots) {
        if (err) {
            res.json({ status: 0, message: "Screenshots Not Found" })
        } else {
            res.json({ status: 1, data: screenshots })
        }
    }).clone();
}

const saveScreenshot = async(req, res) => {
    const screenshot1 = new MyScreenshot(req.body);
    await screenshot1.save();

    res.json({ status: 1, message: "Screenshot Saved Successfully" });
}


const deleteScreenshot = async(req, res) => {
    let screenshotid = req.params.screenshotid;
    await MyScreenshot.deleteOne({ _id: screenshotid });
    res.json({ status: 1, message: 'Screenshot Deleted Successfully' })
}

module.exports = { allScreenshots, deleteScreenshot, saveScreenshot}