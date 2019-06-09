var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
var cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/minhagoiania", express.static("src/public"));
app.use(cors());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/minhagoiania', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public/views/index.html'));
})
require("../src/models/issueModel")
require("../src/models/userModel")
require("../src/routes/auth")(app)
require("../src/routes/issue")(app)

module.exports = app;