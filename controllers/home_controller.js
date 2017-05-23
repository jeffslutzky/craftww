(function() {
  'use strict';

  function HomeController($http, $resource) {

    var vm = this;

    vm.url = "https://www.reddit.com/r/pics/top/.json";

    vm.getFeed = function() {
      $http.get(vm.url)
        .then(function(response) {
          vm.feed = response.data.data.children;
          console.log(vm.feed);
        })
        .catch(function (err) {
          console.log('Error: ', err);
        });
    };

    vm.toggle = function(item) {
      item["favorite"] = !item["favorite"];
      console.log(item);
    }

    vm.getFeed();

  }

  myApp.controller('HomeController', ['$http', '$resource', HomeController]);

}) ();
