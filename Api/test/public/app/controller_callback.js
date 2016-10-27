app.controller('callbackCtrl', function($rootScope, $scope, $http) {

  $scope.data = "No ha llegado nada ";
  $scope.resourceScope = "public_profile"
  $scope.data = $scope.getParameterByName('code');

  $http.post(api_url + "/oauth2/authorize.asmx/token", {
      grant_type: "authorization_code",
      code: $scope.data,
      redirect_uri: "http://localhost:8081/callback",
      client_id: "503998150027",
      client_secret: "xlo1nmj9e5pldnq7g89rzdvw8q7r4g",
      state: "cyz"
    })
    .then(function(data) {
      $scope.res = data.data;
      $scope.scope = JSON.parse($scope.res.scope)[0];
      console.log( JSON.parse($scope.res.scope));
    });


  $scope.refreshToken = function() {
    $http.post(api_url + "/oauth2/authorize.asmx/refreshToken", {
        grant_type: "refresh_token",
        refresh_token: $scope.res.refresh_token,
        client_id: "503998150027",
        state: "cyz"
      })
      .then(function(data) {
        $scope.res = data.data;
      });
  }

  $scope.resource = function(scope){
    $http.post(api_url + "/oauth2/resource.asmx/scope", {access_token: $scope.res.access_token, scope: scope})
    .then(function(data){
      console.log(data.data);
      console.log(JSON.parse(data.data.description));
    });
  }
});
