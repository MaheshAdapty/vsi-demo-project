angular.module("myApp")
  .service("productDataService", function ($http) {

    function getProductData() {
      return $http.get("json/productDetails.json").then(function (response) {

        return response.data;
      });

    };
    return {
      getProductData: getProductData


    }
  });
