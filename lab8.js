angular.module('myapp',['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/Deleazzy", {
        templateUrl : "Deleazzy.html"
    })
    .when("/lab7", {
        templateUrl : "lab7.html"
    })
    
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});