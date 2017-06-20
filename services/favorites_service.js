myApp.service('favoritesService', function(){

  this.favorites = [];

  this.addFavorite = function(id) {
    this.favorites.push(id);
    console.log(this.favorites);
  };

});
