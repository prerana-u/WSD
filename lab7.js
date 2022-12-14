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
        {name:'Vegetable Manchurian',price:250, description:'Vegetable Manchurian in a delicious gravy.', spice:'High', calories:'250', ftype:'Appetiser'},
        {name:'French Fries',price:130, description:'Fried Potatoes served with Mayonaisse on the side.', spice:'Mild', calories:'350', ftype:'Appetiser'},
        {name:'Baked Potatoes',price:320, description:'Potatoes baked with cheesy goodness and served with Barbeque Sauce.', spice:'Low', calories:'300', ftype:'Appetiser'},
        {name:'French Toast',price:150, description:'Thick slices made from our homemade sourdough bread.', spice:'Low', calories:'120', ftype:'Main Course'},
        {name:'Pasta in Alfredo Sauce',price:450, description:'Pasta served with a delicious Alfredo Sauce.', spice:'Mild', calories:'220', ftype:'Main Course'},
        {name:'Vegetarian Ramen',price:450, description:'Ramen Noodles in a delicious soup.', spice:'High', calories:'250', ftype:'Main Course'},
        {name:'Chocolate Cake',price:230, description:'Delicious chocolate cake topped with chocolate chips.', spice:'Low', calories:'300', ftype:'Dessert'},
        {name:'Vanilla Mousse',price:210, description:'A fluffy mixture of vanilla custard and whipped cream topped with fresh fruit.', spice:'Low', calories:'300', ftype:'Dessert'},
        {name:'Tiramisu',price:300, description:'Tiramisu is a coffee-flavoured Italian dessert', spice:'Low', calories:'210', ftype:'Dessert'}
    ];
    
    $scope.fd=fooditems;
    $scope.rowlimit=10;
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      $scope.turnGreen = function (){
          $scope.customStyle.style = {"color":"green"};
      }
      $scope.fname = " ";  

      $scope.changeColorFilter = function (item){
       
         if (item.spice == 'High') {
           item.class = 'High';
       }
       else if (item.spice == 'Low') {
           item.class = 'Low';
       }
       else {
           item.class = 'Medium';
       }
     
       return true;
        
      };
    });

