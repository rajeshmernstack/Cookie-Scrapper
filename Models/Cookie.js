const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cookies');



const cookieSchema = new mongoose.Schema({
    cookiedata: String
})



const MyCookie = mongoose.model("Cookies", cookieSchema);

module.exports = MyCookie;