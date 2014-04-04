'use strict';

var http = require('http');
var testService=require('../app/ResgisterFunction');
describe('http hello world', function () {
    var Metthods= new testService.Patient('santhosh','24','Male','Admin','MyTask');
    it('testing data using service',function (done) {
       var response = testService.GetPatientData();            
        expect(response).to.eventually.equal("")
        .and.notify(done);
    });

    it('is array',function(done){
      var result =testService.GetPatientData();
      assert.isArray(result, 'what kind of tea do we want?').and.notify(done);      
    });

   it('has a name property of {your name}', function() {
     expect(Metthods.tellAbout()).to.have.property('Name').that.is.a('string');
   });

   it('as the property and check the value in that property',function(){
     expect(Metthods.tellAbout()).to.have.property('Name','santhosh');
   });

   it('has an age above 18', function () {
      expect(Metthods.tellAbout().Age).to.be.at.above(18);
   });

   it('Checking Is in correct format Or Not', function() {
     expect(Metthods.tellAbout()).to.deep.equal({Name:'santhosh',Age:'24',Gender:'Male',Role:'Admin','Page':'MyTask'});
   });

});