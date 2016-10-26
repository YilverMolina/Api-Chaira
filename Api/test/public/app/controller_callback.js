app.controller('callbackCtrl', function($rootScope, $scope, $http) {

  $scope.data = "No ha llegado nada ";

  $scope.data = $scope.getParameterByName('code');

  $http.post(api_url + "/oauth2/authorize.asmx/token", {
      grant_type: "authorization_code",
      code: $scope.data,
      redirect_uri: "http://localhost:8081/callback",
      client_id: "159453327395",
      client_secret: "nm0rlweo35q4v7rpw6rl29gj1d7p4y",
      state: "cyz"
    })
    .then(function(data) {
      $scope.res = data.data;
      $scope.scope = $scope.res.scope;
    });


  $scope.refreshToken = function() {
    $http.post(api_url + "/oauth2/authorize.asmx/refreshToken", {
        grant_type: "refresh_token",
        refresh_token: $scope.res.refresh_token,
        client_id: "159453327395",
        state: "cyz"
      })
      .then(function(data) {
        $scope.res = data.data;
      });
  }
});
