require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static('public'))

//Import Routers
const cookieRouter = require('./Routes/cookieRouter');
const screenshotRouter = require('./Routes/screenshotRouter');
const settingRouter = require('./Routes/settingRouter');
// ----------------------------------------------------------------

//Use Routes
app.use('/api/cookies', cookieRouter);
app.use('/api/screenshots', screenshotRouter)
app.use('/api/settings', settingRouter);
// ----------------------------------------------------------------



//UI Routesx`
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/screenshots', (req, res) => {
    res.render('screenshots');
})
app.get('/cookies', (req, res) => {
    res.render('cookies');
})
app.get('/block', (req, res) => {
    res.render('block');
})
app.get('/redirectwebsite', (req, res) => {
    res.render('redirect')
})


app.listen(3000, () => {
    console.log("Server started")
})