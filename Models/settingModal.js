const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);



const SettingSchema = new mongoose.Schema({
    RedirectSitePermission: Boolean,
    RedirectSiteURL: String,
    BlockSitePermission: Boolean,
    BlockSiteURL: String,
    IframePermission: Boolean,
    IframeCode: String
})
const MySetting = mongoose.model("Settings", SettingSchema);

module.exports = MySetting;