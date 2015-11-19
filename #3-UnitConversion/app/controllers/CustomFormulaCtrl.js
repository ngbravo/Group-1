app.controller('CustomFormulasCtrl', function($scope, $localStorage, $sessionStorage){
  this.categories = getCategories($localStorage);
  this.selectedCategory = this.categories[0];
  this.baseUnit = this.selectedCategory.units[0];
  this.newFormula = {isBaseUnit:false, isCustom:true};
  this.addFormula = function(){
    this.selectedCategory.units.push(this.newFormula);
    this.newFormula = {isBaseUnit:false, isCustom:true};
  };
  this.deleteFormula = function(index){
    this.selectedCategory.units.splice(index,1);
  };
});
