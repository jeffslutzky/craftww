myApp.config(function($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
  })
  .when('/faves', {
    templateUrl: 'pages/faves.html',
  })
});
