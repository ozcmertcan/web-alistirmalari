var app = angular.module('uygulama', []);
app.controller('kontrol', function($scope, $http) {
  $http.get("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    $scope.siteverileri= response.data;
  
  });
  $scope.silmeistegi= function(gelenveri){
    $scope.siteverileri.splice($scope.siteverileri.indexOf(gelenveri),1);}
  $scope.kisiekle= function(gelenyeniid,gelenyeniad,gelenyeniposta,gelenyenisehir){
    $scope.siteverileri.push({id:gelenyeniid,name:gelenyeniad,email:gelenyeniposta,address:{city:gelenyenisehir}});

   $scope.yeniid="";
    $scope.yeniad="";
    $scope.yeniposta="";
    $scope.yenisehir="";
    
  }
});