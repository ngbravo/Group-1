var app = angular.module('conversor', [ ]);

app.controller('ConversionController', function(){
  this.categories = unitCategories;
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
        var convertedValue = toBase * unit.conversionSlope + unit.conversionOffset;
        results.push({name: unit.name, value: convertedValue});
      }
      this.convertedUnitValues = results;
    }
    catch(err) {
        this.convertedUnitValue = "N/A";
    }
  };
});

var unitCategories = [
  {
    name: "length",
    units:[
      {
        name: "meter",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "kilometer",
        isBaseUnit: false,
        conversionSlope: 0.001, //meter = kilometer * conversionSlope + conversionOffset
        conversionOffset: 0
      }
    ]
  },
  {
    name: "weight",
    units:[
      {
        name: "gram",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "kilogram",
        isBaseUnit: false,
        conversionSlope: 0.001,
        conversionOffset: 0
      }
    ]
  }

];
