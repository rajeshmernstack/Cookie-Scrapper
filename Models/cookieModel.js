const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);



const cookieSchema = new mongoose.Schema({
    cookiedata: String
})
const MyCookie = mongoose.model("Cookies", cookieSchema);

module.exports = MyCookie;