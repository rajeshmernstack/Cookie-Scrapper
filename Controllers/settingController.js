const MySetting = require('../Models/settingModal');


const addSetting = async (req, res) => {
    const Setting1 = new MySetting(req.body);
    await Setting1.save();

    res.json({ status: 1, message: "Setting Saved Successfully" });
}

const showSetting = async (req, res) => {
    await MySetting.find({}, function (err, settings) {
        if (err) {
            res.json({ status: 0, message: "Setting Not Found" })
        } else {
            res.json({ status: 1, data: settings })
        }
    }).clone();
}

const blockSite = async (req, res) => {
    await MySetting.findByIdAndUpdate({ _id: process.env.SettingObjectID }, req.body, function (err, result) {
        if (err) {
            res.json({ status: 0, message: "Error While Updating Setting." });
        } else {
            res.json({ status: 1, message: "Block Site Setting Updated Successfully" });
        }
    }).clone();
}

const redirectWebsite = async (req, res) => {
    await MySetting.findByIdAndUpdate({ _id: process.env.SettingObjectID }, req.body, function (err, result) {
        if (err) {
            res.json({ status: 0, message: "Error While Updating Setting." });
        } else {
            res.json({ status: 1, message: "Redirect Site Setting Updated Successfully" });
        }
    }).clone();
}

const embedIframe = async (req, res) => {
    await MySetting.findByIdAndUpdate({ _id: process.env.SettingObjectID }, req.body, function (err, result) {
        if (err) {
            res.json({ status: 0, message: "Error While Updating Setting." });
        } else {
            res.json({ status: 1, message: "Iframe Setting Updated Successfully" });
        }
    })
}

module.exports = { addSetting, showSetting, blockSite, redirectWebsite, embedIframe }