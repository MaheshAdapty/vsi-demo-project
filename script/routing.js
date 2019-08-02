angular.module("myApp")

.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/plp",{
        // templateUrl:"templates/plp.html",
        template:"<product-data-component></product-data-component>"
    })
   
    $locationProvider.html5Mode(true);
}); 


