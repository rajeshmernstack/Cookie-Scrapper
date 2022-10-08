const MySetting = require('../Models/settingModal');


const addSetting = async (req, res) => {
    const Setting1 = new MySetting(req.body);
    await Setting1.save();

    res.json({ status: 1, message: "Setting Saved Successfully" });
}
module.exports = {addSetting}