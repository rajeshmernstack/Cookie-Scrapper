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
    await MySetting.findByIdAndUpdate(req.body._id, {BlockSiteURL: req.body.BlockSiteURL, BlockSitePermission: req.body.BlockSitePermission}, function(err, result){
        if(err) {
            res.json({status: 0, message: "Error While Updating Setting."});
        }else{
            res.json({status: 1, message: "site updated successfully"});
        }
    })
}
module.exports = {addSetting, showSetting, blockSite}