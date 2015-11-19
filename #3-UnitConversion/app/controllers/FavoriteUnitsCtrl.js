app.controller('FavoriteUnitsCtrl', function($scope, $localStorage, $sessionStorage){
  this.categories = getCategories($localStorage);
});
