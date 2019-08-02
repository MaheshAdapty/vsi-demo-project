angular.module("myApp")
.directive("productRatingDirective", function(){
    return{
        restrict:"E",
        templateUrl:"directives/productRatingDirective.html"
    }
});
