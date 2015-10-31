
angular.module("cutregram", []);



angular.module("cutregram").config(function($httpProvider){

   // configuramos el servicio $http para que envíe las cabeceras necesarias

   $httpProvider.defaults.headers.common = {
     "X-Cutregram-Api-Key": "e4c34cd96ba04cadbba17ab3584db364"
   };

   // Configuramos las cabeceras por deecto para evitar problemas de CORS

   $httpProvider.defaults.headers.post = {};
   $httpProvider.defaults.headers.put = {};
   $httpProvider.defaults.headers.patch = {};

})
