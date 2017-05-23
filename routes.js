myApp.config(function($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
  })
  .when('/favorites', {
    templateUrl: 'pages/favorites.html',
  })

});
