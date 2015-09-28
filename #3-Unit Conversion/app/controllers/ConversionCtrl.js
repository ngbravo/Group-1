//Conversion Controller
app.controller('ConversionCtrl', function($scope, $localStorage, $sessionStorage){
  this.categories = getCategories($localStorage);

  //this.categories = unitCategories;
  this.selectedCategory = this.categories[0];
  this.currentUnit = null;
  this.currentUnitValue = 0;
  this.convertedUnitValues = "N/A";
  this.updateConvertedUnitValue = function(){
    try {
      if(this.currentUnit === null){
        this.convertedUnitValues = "N/A";
        return;
      }
      var toBase = this.currentUnitValue * this.currentUnit.conversionSlope + this.currentUnit.conversionOffset;
      var results = [];
      for(var i = 0; i < this.selectedCategory.units.length; i++){
        var unit = this.selectedCategory.units[i];
        if(unit.favorite === true){
          var convertedValue = (toBase - unit.conversionOffset) / unit.conversionSlope;
          results.push({name: unit.name, value: convertedValue});
        }
      }
      this.convertedUnitValues = results;
    }
    catch(err) {
        this.convertedUnitValue = "N/A";
    }
  };
});
