(function() {
  'use strict';

  function HomeController($http, $resource) {

    var vm = this;

    vm.url = "https://www.reddit.com/r/pics/top/.json";

    vm.getFeed = function() {
      $http.get(vm.url)
        .then(function(response) {
          vm.feed = response.data.data.children;
          // angular.forEach(vm.feed, function(item) {
          //   item.checked = false;
          // });
          console.log(vm.feed);
        })
        .catch(function (err) {
          console.log('Error: ', err);
        });
    };

    vm.toggle = function(item) {
      // item["favorite"] = !item["favorite"];
      console.log("favorited: " + item["favorite"]);
    }

    vm.getFeed();

    vm.toggleFavorites = function() {
      // vm.showFavorites = !vm.showFavorites;
      console.log("vm.showFavorites = " + vm.showFavorites);
    };

  }

  myApp.controller('HomeController', ['$http', '$resource', HomeController]);

}) ();
