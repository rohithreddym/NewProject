var MyAngular = angular.module('AngularMaster', ['ui.state', 'ngGrid'])
.config(['$stateProvider', function ($stateProvider) {
    var Home = {
        name: 'Home',
        url: '/Home',
        templateUrl: 'InnerPages/HomePage.html',
        controller: 'HomeController'
    };

    var HomeLeft = {
        name: 'Home.Left',
        url: '/Left',
        templateUrl: 'InnerPages/HomeInnerPages/HomeRightPage.html',
        controller: 'HomeRightController'
    };
    $stateProvider
    .state(Home)
    .state(HomeLeft)
    .state({ name: 'RegisterPatient', url: '/RegisterPatient', templateUrl: 'InnerPages/RegisterPatient.html', controller: 'RegisterPatientController' })
    .state({ name: 'AllPatients', url: '/AllPatients', templateUrl: 'InnerPages/PatientsData.html', controller: 'PatientsDataController' });
}]);
