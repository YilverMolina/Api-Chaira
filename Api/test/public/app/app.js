var app = angular.module('chaira-developer', ['ngRoute', 'route-segment', 'view-segment']);

var api_url = "http://chaira.udla.edu.co/api/v0.1";
//var api_url = "http://localhost:48532";

app.config(['$routeSegmentProvider', '$routeProvider', '$locationProvider', '$httpProvider',
    function($routeSegmentProvider, $routeProvider, $locationProvider, $httpProvider) {

      $httpProvider.defaults.headers.post = {};

        $routeSegmentProvider.

        when('/home', 'home').
        when('/callback', 'callback').	

        segment('home', {
            templateUrl: '/view_home.html',
            controller: 'homeCtrl'
        }).

        segment('callback', {
            templateUrl: '/view_callback.html',
            controller: 'callbackCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
        $locationProvider.html5Mode(true);
    }
])
.controller('indexCtrl', function($scope){
	
	$scope.getParameterByName = function(name) {
       name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
       var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
           results = regex.exec(location.search);
       return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
   }
});
