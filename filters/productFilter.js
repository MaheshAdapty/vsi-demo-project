angular.module("myApp")
.filter("productFilter", function(){
    return function(productData, sortText){
     var filteredProductList=productData;

     if(sortText=="Price: Low To High"){
         for(var i=0;i<filteredProductList.length;i++){
             for(var j=i+1;j<filteredProductList.length;j++){
                if(filteredProductList[i].price > filteredProductList[j].price ){
                    var dummy=filteredProductList[i];
                    filteredProductList[i]=filteredProductList[j];
                    filteredProductList[j]=dummy;
                }   
             }
         }
     }
     else if(sortText=="Price: High To Low"){
        for(var i=0;i<filteredProductList.length;i++){
            for(var j=i+1;j<filteredProductList.length;j++){
               if(filteredProductList[i].price < filteredProductList[j].price ){
                   var dummy=filteredProductList[i];
                   filteredProductList[i]=filteredProductList[j];
                   filteredProductList[j]=dummy;
               }   
            }
        }
    }
    else if(sortText=="Product: A To Z"){
        filteredProductList.sort(function(element1, element2){
            if(element1.name < element2.name) { return -1; }
            if(element1.name > element1.name) { return 1; }
            return 0;
        })
    }
        return filteredProductList;
    }
});






// [{"name":"Calcium Citrate","id":"101","description":"Calcium Citrate with Magnesium & Vitamin D (300 Capsules)",
// "rating":"5","price":"1000","imgUrl":"images/calcium.png"},
// {"name":"Vitamin Code","id":"102","description":"Vitamin Code Raw Vitamin B-Complex","rating":"4","price":"1500",
// "imgUrl":"images/vd2000.png"},
// {"name":"Vitamin C","id":"103","description":"Vitamin C - 1000 MG (300 Capsules)","rating":"4","price":"2500",
// "imgUrl":"images/vd1000.png"},
// {"name":"Vitamin D3","id":"104","description":"Vitamin D3 5000 IU (200 Softgels)","rating":"3","price":"2000",
// "imgUrl":"images/vd2000.png"},
// {"name":"Vitamin Code","id":"102","description":"Vitamin Code Raw Vitamin B-Complex - High Potency Whole Food Formula (120 Vegan Capsules)",
// "rating":"4","price":"1500","imgUrl":"images/vCode.png"}]



// "Price: Low To High"
//   "Price: High To Low"
//  "Product: A To Z"