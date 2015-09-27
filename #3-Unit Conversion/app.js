var app = angular.module('conversor', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'main.html',
            controller: 'ConversionController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

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
        var convertedValue = (toBase - unit.conversionOffset) / unit.conversionSlope;
        results.push({name: unit.name, value: convertedValue});
      }
      this.convertedUnitValues = results;
    }
    catch(err) {
        this.convertedUnitValue = "N/A";
    }
  };
});

//base * conversionSlope + conversionOffset = newUnit
//conversiones son de cualquier unidad a la base
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
        conversionSlope: 1000,
        conversionOffset: 0
      },
      {
        name: "yard",
        isBaseUnit: false,
        conversionSlope: 0.9144,
        conversionOffset: 0
      },
      {
        name: "inch",
        isBaseUnit: false,
        conversionSlope: 0.0254,
        conversionOffset: 0
      },
      {
        name: "feet",
        isBaseUnit: false,
        conversionSlope: 0.3048,
        conversionOffset: 0
      },
      {
        name: "mile",
        isBaseUnit: false,
        conversionSlope: 1609.344,
        conversionOffset: 0
      }
    ]
  },
  {
    name: "weight",
    units:[
      {
        name: "gram",
        isBaseUnit: false,
        conversionSlope: 0.001,
        conversionOffset: 0
      },
      {
        name: "kilogram",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "pound",
        isBaseUnit: false,
        conversionSlope: 0.45359237,
        conversionOffset: 0
      },
      {
        name: "metric ton",
        isBaseUnit: false,
        conversionSlope: 1000,
        conversionOffset: 0
      },
    ]
  },
  {
    name: "area",
    units:[
      {
        name: "square meter",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "hectare",
        isBaseUnit: false,
        conversionSlope: 10000,
        conversionOffset: 0
      }
    ]
  },
  {
    name: "volume",
    units:[
      {
        name: "cubic meter",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "litre",
        isBaseUnit: false,
        conversionSlope: 0.001,
        conversionOffset: 0
      }
    ]
  },
  {
    name: "temperature",
    units: [
      {
        name: "celcius",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "farenheit",
        isBaseUnit: false,
        conversionSlope: 5/9,
        conversionOffset: -32*5/9
      },
      {
        name: "kelvin",
        isBaseUnit: false,
        conversionSlope: 1,
        conversionOffset: -273.15
      }
    ]
  },
  {
    name: "speed",
    units: [
      {
        name: "m/s",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "km/h",
        isBaseUnit: false,
        conversionSlope: 0.277777778,
        conversionOffset: 0
      },
      {
        name: "mile/h",
        isBaseUnit: false,
        conversionSlope: 0.44704,
        conversionOffset: 0
      }
    ]
  },
  {
    name: "pressure",
    units: [
      {
        name: "Pascal",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "atm",
        isBaseUnit: false,
        conversionSlope: 101325,
        conversionOffset: 0
      },
      {
        name: "bar",
        isBaseUnit: false,
        conversionSlope: 100000,
        conversionOffset: 0
      },
      {
        name: "Torr",
        isBaseUnit: false,
        conversionSlope: 133.322368,
        conversionOffset: 0
      },
      {
        name: "psi",
        isBaseUnit: false,
        conversionSlope: 6894.75729,
        conversionOffset: 0
      }
    ]
  }

];
