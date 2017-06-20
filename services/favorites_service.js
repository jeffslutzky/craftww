myApp.service('favoritesService', function(){

  this.favorites = [];

  this.addRemoveFavorite = function(id) {
    if (this.favorites.includes(id)) {
      this.favorites.splice(this.favorites.indexOf(id), 1);
    } else {
      this.favorites.push(id);
    };
  };

});
