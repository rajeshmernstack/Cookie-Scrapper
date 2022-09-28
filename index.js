const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const MyCookie = require('./Models/Cookie')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.set('view engine', 'ejs');
const axios = require('axios').default;


app.get('/', (req, res) => {
    MyCookie.find({}, function (err, cookies) {
        if (err) {
            res.json('index');
        } else {

            res.render('index', { data: cookies })
        }
    })
})

app.get('/deletecookie/:cookieid', async (req, res) => {
    let cookieid = req.params.cookieid;
    await MyCookie.deleteOne({ _id: cookieid });
    res.json({status: 1, message: 'cookie deleted successfully'})

})

// app.post('/savecookie', async (req, res) => {
//     const cookie1 = new MyCookie(req.body);
//     await cookie1.save();

//     res.json({ status: 1, message: "Cookies Saved Successfully" });

// })


app.listen(3000, () => {
    console.log("Server started")
})