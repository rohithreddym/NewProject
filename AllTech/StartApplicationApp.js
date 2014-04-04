var http = require('http');
var path = require('path');
module.exports = function (app) {

    app.post('/api/RegisterPatientDetails', function (req, res1) {
        jsonObject = JSON.stringify(req.body);
        var resVal;
        var postheaders = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
        };
        var optionspost = {
            host: '192.168.10.35',//
            port: 8080,//59915,
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

    app.get('/api/getPatientData', function (req, res) {
        var optionsget = {
            host: '192.168.10.35',
            port: 8080,
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
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile('./public/Master.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};