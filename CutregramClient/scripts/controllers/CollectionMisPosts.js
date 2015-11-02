
angular.module("cutregram").controller("CollectionMisPostCtrl", function($scope, $http){

   // hacemos la petición de MIS posts al servidor
   $http.get("http://cutregram-sp.appspot.com/api/1/posts/me").then(
      // la petición al servidor fue correcta
      function(respuesta){
         //debugger;
         //console.log(respuesta);
         $scope.posts = respuesta.data;
      },

      // ocurrió un error al ir al servidor
      function(error){
         //debugger;
         console.log(error);
      }
   );

});

/*
 author: "Juan Carlos Merlos"
 coords: null
 created: 1446254104000
 dislikes: 0
 id: 5161210659995648
 image_url: "http://www.fotoshumor.com/carpeta/1/original/176891432150836-feos.jpg"
 likes: 0
 text: "No soy feo, Dios me retó a conquistar mujeres en modo legendario!!"
 */