function RegisterPatientController($scope, $http) {
    $scope.Item;
    $scope.AgeData = [{ "ID": "20", "Value": "20" },
                      { "ID": "21", "Value": "21" },
                      { "ID": "22", "Value": "22" },
                      { "ID": "23", "Value": "23" },
                      { "ID": "24", "Value": "24" },
                      { "ID": "25", "Value": "25" },
                      { "ID": "26", "Value": "26" },
                      { "ID": "27", "Value": "27" },
                      { "ID": "28", "Value": "28" },
                      { "ID": "29", "Value": "29" },
                      { "ID": "30", "Value": "30" },
                      { "ID": "31", "Value": "31" },
                      { "ID": "32", "Value": "32" }]
  $scope.RoleData = [{ "RoleID": "Patient", "Value": "Patient" },
                      { "RoleID": "Admin", "Value": "Admin" },
                      { "RoleID": "Doctor", "Value": "Doctor" },
                      { "RoleID": "CareManager", "Value": "CareManager" },
                      { "RoleID": "Online", "Value": "Online" }]
    $scope.PageData = [{ "PageID": "MyTask", "Value": "MyTask" },
                      { "PageID": "PatientDashBoard", "Value": "PatientDashBoard" },
                      { "PageID": "Patient Search", "Value": "Patient Search" },
                      { "PageID": "Task Bundle", "Value": "Task Bundle" },
                      { "PageID": "Care Management Report", "Value": "Care Management Report" }]

    $scope.RegisterPatientData = function () {
        $scope.RegisterData = { Name: $scope.Item.Name, Age: $scope.Item.ID, Gender: "Male", Role: $scope.Item.RoleID, Page: $scope.Item.PageID };
        alert(JSON.stringify($scope.RegisterData));
        $http.post('http://192.168.10.35:7777/api/RegisterPatientDetails', $scope.RegisterData)
            .success(function (data) {
                if(data==1)
                    alert('Inserted successfully');
                else
                    alert('Insertion failed');
            })
            .error(function (data) {
                alert('error');
            });
    }
}