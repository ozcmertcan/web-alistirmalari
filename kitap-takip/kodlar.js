var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
 $scope.kitaplar=[{kitapadi:"Suc ve Ceza",yazari:"Dosteyevski",sayfasi:600},
                  {kitapadi:"Sefiller",yazari:"Victor Hugo",sayfasi:1200},
                  {kitapadi:"Kucuk Prens",yazari:"Saint-Exupéry",sayfasi:100}];


  
  $scope.sil= function(index){
    $scope.kitaplar.splice(index,1)
  }
  
$scope.ekle= function(newbook,writer,pagenumber){
$scope.kitaplar.push({kitapadi:newbook,yazari:writer,sayfasi:pagenumber})
$scope.newbook="";
  $scope.writer="";
  $scope.pagenumber="";
}
  $scope.guncellenmekistenenindex='-1';
$scope.guncelle= function(x,index){
  $scope.guncellenmekistenenindex=index;
  $scope.newbook=x.kitapadi;
  $scope.writer=x.yazari;
  $scope.pagenumber=x.sayfasi;
}
  $scope.update = function(newbook,writer,pagenumber){
    $scope.kitaplar[$scope.guncellenmekistenenindex]={kitapadi:newbook,yazari:writer,sayfasi:pagenumber}
    $scope.guncellenmekistenenindex='-1';
    $scope.newbook="";
  $scope.writer="";
  $scope.pagenumber="";
    
  }
  $scope.iptalet= function(gelenveri){
    $scope.guncellenmekistenenindex='-1';
    $scope.newbook="";
  $scope.writer="";
  $scope.pagenumber="";
  }
});

