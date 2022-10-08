const MyCookie = require('../Models/cookieModel');

const allCookies = async(req, res) => {
    await MyCookie.find({}, function (err, cookies) {
        if (err) {
            res.json({ status: 0, message: "Cookies Not Found" })
        } else {
            res.json({ status: 1, data: cookies })
        }
    }).clone();
}

const deleteCookie = async(req, res) => {
    let cookieid = req.params.cookieid;
    await MyCookie.deleteOne({ _id: cookieid });
    res.json({ status: 1, message: 'Cookie Deleted Successfully' })
}

const saveCookie = async(req, res) => {
    const cookie1 = new MyCookie(req.body);
    await cookie1.save();

    res.json({ status: 1, message: "Cookies Saved Successfully" });
}
module.exports = { allCookies, deleteCookie, saveCookie}