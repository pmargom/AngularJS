
angular.module("cutregram", ["ngRoute"]);



angular.module("cutregram").config(function($httpProvider){

   // configuramos el servicio $http para que envíe las cabeceras necesarias

   $httpProvider.defaults.headers.common = {
     "X-Cutregram-Api-Key": "e4c34cd96ba04cadbba17ab3584db364"
   };

   // Configuramos las cabeceras por deecto para evitar problemas de CORS
   $httpProvider.defaults.headers.post = {};
   $httpProvider.defaults.headers.put = {};
   $httpProvider.defaults.headers.patch = {};

});

// en fase de config inyectamos $routeProvider para configurar las rutas de la aplicación

angular.module("cutregram").config(function ($routeProvider){

   // definir la ruta de "Todos los posts"

   $routeProvider.when("/todos", {
      controller: "CollectionPostCtrl",
      templateUrl: "views/todos.html"   // ojo, no confundir con 'template'
   });

   // definir la ruta de "Mis posts"

   $routeProvider.when("/mis-posts", {
      controller: "CollectionMisPostCtrl",
      templateUrl: "views/mis.html"
   });

   // configuramos una ruta por defecto
   $routeProvider.otherwise({
      redirectTo: "/todos"
   });

});
