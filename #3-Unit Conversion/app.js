var app = angular.module('conversor', [ ]);

app.controller('ConversionController', function(){
  this.categories = unitCategories;
  this.selectedCategory = this.categories[0];
  this.currentUnit = null;
  this.convertedUnit = null;
  this.currentUnitValue = 0;
  this.convertedUnitValue = "N/A";
  this.updateConvertedUnitValue = function(){
    try {
      var toBase = this.currentUnitValue * this.convertedUnit.conversionSlope + this.convertedUnit.conversionOffset;
      this.convertedUnitValue = (toBase-this.currentUnit.conversionOffset)/this.currentUnit.conversionSlope;
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
