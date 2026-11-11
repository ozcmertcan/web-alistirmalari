var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.bilgiler=[{id:1,ad:"ahmet",soyad:"yılmaz",yas:20,sehir:"ankara"},{id:2,ad:"ayşe",soyad:"kaya",yas:21,sehir:"izmir"},{id:3,ad:"mehmet",soyad:"demir",yas:25,sehir:"bursa"},{id:4,ad:"fatma",soyad:"çelik",yas:45,sehir:"konya"},{id:5,ad:"ali",soyad:"şahin",yas:43,sehir:"adana"},{id:6,ad:"zeynep",soyad:"arslan",yas:19,sehir:"izmir"},{id:7,ad:"can",soyad:"aydın",yas:20,sehir:"ankara"},{id:8,ad:"emre",soyad:"koç",yas:39,sehir:"istanbul"},{id:9,ad:"elif",soyad:"öztürk",yas:28,sehir:"antalya"},{id:10,ad:"burak",soyad:"yıldız",yas:28,sehir:"sivas"}]

  $scope.ekle= function(aydi,name,surname,age,city){
    $scope.bilgiler.push({id:aydi,ad:name,soyad:surname,yas:age,sehir:city})
  }
  $scope.sil = function(secili){
    $scope.bilgiler.splice(secili,1)
  }
  $scope.guncellenmekistenenindex=-1;
  $scope.guncelle = function(x,index){
    $scope.guncellenmekistenenindex=index;
    $scope.aydi=x.id;
    $scope.name=x.ad;
    $scope.surname=x.soyad;
    $scope.age=x.yas;
    $scope.city=x.sehir;
  }
  $scope.update = function(aydi,name,surname,age,city){
    $scope.bilgiler[$scope.guncellenmekistenenindex]={id:aydi,ad:name,soyad:surname,yas:age,sehir:city}
    $scope.guncellenmekistenenindex=-1;
    $scope.aydi="";
    $scope.name="";
    $scope.surname="";
    $scope.age="";
    $scope.city="";
  }
  $scope.iptal = function (aydi,name,surname,age,city){
     $scope.guncellenmekistenenindex=-1;
    $scope.aydi="";
    $scope.name="";
    $scope.surname="";
    $scope.age="";
    $scope.city="";
  }
});