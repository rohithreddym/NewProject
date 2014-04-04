var q = require('q');
var http = require('http');
var app = require('../app');

exports.Patient = function(name, age, gender, role, page) {
  return {
    tellAbout: function() {
      return {
        Name: name,
        Age: age,
        Gender:gender,
        Role: role,
        Page: page
      };
    },
    complain: function() {
      throw new Error('complaint');
    }
  };
};
exports.GetPatientData = function() {
  var deferred = q.defer();
  var optionsget = {
            host: 'localhost',
            port: 55479,
            path: '/api/Login/GetPatient',
            method: 'GET'};
  http.get(optionsget, function(res){
    var body = '';
    res.on('data', function(chunk){ body = body + chunk; });
    res.on('end', function() {
			deferred.resolve(body);
    });
  });
  return deferred.promise;
};

exports.GetMasterData = function() {
  var deferred = q.defer();
  var optionsget = {
            host: 'localhost',
            port: 55479,
            path: '/api/Login/RegisterPatient',
            method: 'post'};
  http.get(optionsget, function(res){
    var body = '';
    res.on('data', function(chunk){ body = body + chunk; });
    res.on('end', function() {
      deferred.resolve(body);
    });
  });
  return deferred.promise;
};


