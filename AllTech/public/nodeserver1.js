var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 2525;
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

app.get('/api/getPatientData', function (req, res) {
        var optionsget = {
            host: 'localhost',
            port: 55479,
            path: '/api/Login/PatientData',
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

app.post('/api/RegisterPatientDetails', function (req, res1) {
    console.log(res1);
    var resVal;
    var postheaders = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
    };
    var optionspost = {
        host: 'localhost',//'192.168.10.35',//
        port: 55479,//8080,//59915,
        path: '/api/Login/RegisterPatient',
        method: 'POST',
        headers: postheaders
    };
    var reqPost = http.request(optionspost, function (res) {
        console.log("statusCode: ", res.statusCode);
        res.on('data', function (data) {
            resVal = JSON.parse(data);
            res1.end(resVal);
            console.info('\n\nPOST completed');
        });
    });
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('node server error', function (e) {
        console.error(e);
    });
});

app.listen(port);
console.log("App listening on port " + port);