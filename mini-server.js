var express = require("express");
var app = express();

app.use("/",express.static(__dirname+"/dist"));

app.listen(7777,function(){
    require("opn")("http://127.0.0.1:7777/");
});