angular.module("food",[])
.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("foodctrl",function($scope)
{
    var fooditems=[
        {name:'Vegetable Manchurian',price:250, description:'Vegetable Manchurian in a delicious gravy.', spice:'Spicy', calories:'250'},
        {name:'French Fries',price:130, description:'Fried Potatoes served with Mayonaisse on the side.', spice:'Mildly Spicy', calories:'350'},
        {name:'Baked Potatoes',price:320, description:'Potatoes baked with cheesy goodness and served with Barbeque Sauce.', spice:'Not Spicy', calories:'300'},
        {name:'French Toast',price:150, description:'Thick slices made from our homemade sourdough bread.', spice:'Not Spicy', calories:'120'},
        {name:'Pasta in Alfredo Sauce',price:450, description:'Pasta served with a delicious Alfredo Sauce.', spice:'Mildly Spicy', calories:'220'},
        {name:'Vegetarian Ramen',price:450, description:'Ramen Noodles in a delicious soup.', spice:'Spicy', calories:'250'},
        {name:'Chocolate Cake',price:230, description:'Delicious chocolate cake topped with chocolate chips.', spice:'Not Spicy', calories:'300'}
    ];
    
    $scope.fd=fooditems;
    $scope.rowlimit=6;
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      $scope.turnGreen = function (){
          $scope.customStyle.style = {"color":"green"};
      }
      $scope.fname = " ";  

      $scope.changeColorFilter = function (item){
       
         if (item.spice == 'Spicy') {
           item.class = 'High';
       }
       else if (item.spice == 'Not Spicy') {
           item.class = 'Low';
       }
       else {
           item.class = 'Medium';
       }
     
       return true;
        
      };
    });

