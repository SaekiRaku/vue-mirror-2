
var webpack = require("webpack");
var express = require("express");
var opn = require("opn");

process.env.NODE_ENV = "development"

var compiler = webpack(require("./develop.config.js"));

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: "/",
    logLevel: "silent"
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {},
    heartbeat: 2000
})

var app = express();
app.use("/static",express.static("./webpack/static"));
app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(7777);

devMiddleware.waitUntilValid(function() {
    opn("http://127.0.0.1:7777/");
})


