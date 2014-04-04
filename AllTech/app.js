var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = 7777;
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Content-Length, X-Requested-With, Origin, Accept');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
});


app.get('/api/getPatientData', function (req, res) {
    var optionsget = {
        host: 'localhost',
        port: 55479,
        path: '/api/Login/GetPatient',
        method: 'GET'
    };
    http.get(optionsget, function (result) {
        var responseParts = [];
        result.setEncoding('utf8');
        result.on("data", function (chunk) {
            responseParts.push(chunk);
        });
        result.on("end", function () {
            res.end(responseParts.join(''));
        });
    });
});



app.get('/api/ngetPatientData', function (req, res) {
    var responseParts = "asasfsaf";   
            res.end(responseParts);

       
});
// post method codeGroups

require('./StartApplicationApp.js')(app);


app.listen(port);
console.log("App listening on port " + port);

module.exports = app;

