
angular.module("cutregram").controller("CollectionPostCtrl", function($scope, $http){

   $scope.loadPosts = function() {
      // hacemos la petición de posts al servidor
      $http.get("http://cutregram-sp.appspot.com/api/1/posts").then(
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
   };

   $scope.clearPosts = function() {
     $scope.posts = [];
   };

   $scope.addNew = function() {
      //debugger;
      var imgUrl = $scope.imgUrl;
      var texto = $scope.texto;
      if (imgUrl === undefined){
         alert("Indica un valor para la imagen");
         return;
      }
      if (texto === undefined){
         alert("Indica un valor para el texto");
         return;
      }

      $http.post("http://cutregram-sp.appspot.com/api/1/posts", {
         image_url: imgUrl,
         text: texto
      }).then(
         function(res){
            //debugger;
            $scope.loadPosts();
         },
         function(error){
            //debugger;
            alert('Upps, se produjo un error')
         }
      );
   };

   // qué hacer cuando se carga la página
   $scope.loadPosts();

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