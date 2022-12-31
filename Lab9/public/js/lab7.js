angular.module("food",[])
.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("foodctrl",function($scope,$http)
{
    $http.get("http://localhost:3000/json_data")
    .then(function(response) {
      $scope.fd=response.data;
      $scope.rowlimit=$scope.fd.length;
      $scope.orderByMe = function(x) {
          $scope.myOrderBy = x;
      }
      $scope.fname = " ";  
      $scope.customStyle = {};
      $scope.turnGreen = function (){
          $scope.customStyle.style = {"color":"green"};
      }
  
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
});
