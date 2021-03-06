(function() {
  'use strict';

  function HomeController($http, $resource, favoritesService) {

    var vm = this;

    vm.plainURL = "https://www.reddit.com/r/pics"

    vm.search = "";

    vm.getFeed = function() {
      $http.get(vm.plainURL + "/top/.json")
        .then(function(response) {
          vm.feed = response.data.data.children;
        })
        .catch(function (err) {
          console.log('Error: ', err);
        });
    };

    vm.getFeed();

    vm.loadNew = function() {
      vm.plainURL = "https://www.reddit.com/r/" + vm.search;
      vm.getFeed();
      vm.search = "";
    };

    vm.addRemoveFavorite = function(item) {
      var id = item.data.id;
      favoritesService.addRemoveFavorite(id);
    };

  }

  myApp.controller('HomeController', ['$http', '$resource', 'favoritesService', HomeController]);

}) ();
