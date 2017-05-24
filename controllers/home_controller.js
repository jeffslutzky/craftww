(function() {
  'use strict';

  function HomeController($http, $resource) {

    var vm = this;

    vm.url = "https://www.reddit.com/r/pics/top/.json";

    vm.getFeed = function() {
      $http.get(vm.url)
        .then(function(response) {
          vm.feed = response.data.data.children;
        })
        .catch(function (err) {
          console.log('Error: ', err);
        });
    };

    vm.getFeed();

  }

  myApp.controller('HomeController', ['$http', '$resource', HomeController]);

}) ();
