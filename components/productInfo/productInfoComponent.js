
angular.module("myApp")
.component("productInfo", {

    bindings: {
        productDetails : "<", // one-way binding
        onAddToCart : "&" // event based binding
    },

    templateUrl: "components/productInfo/productInfoComponent.html",

    controller: [productInfoController],

    controllerAs: "productInfoCtrl"

});

function productInfoController()
{
    console.dir(this);
}
