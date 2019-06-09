var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');

require("../config/database")("mongodb://admin:z8gr922g@ds135207.mlab.com:35207/minhagoiania")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/minhagoiania", express.static("src/public"))

load('models', { cwd: 'src' })
    .then('modules')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

app.get('/minhagoiania', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public/views/index.html'));
})

module.exports = app;