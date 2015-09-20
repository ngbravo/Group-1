var app = angular.module('conversor', [ ]);

app.controller('ConversionController', function(){})

var unitCategories = [
  {
    name: "length",
    baseUnit: "meter",
    units:[
      {
        name: "meter",
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "kilometer",
        conversionSlope: 0.001, //meter = kilometer * conversionSlope + conversionOffset
        conversionOffset: 0
      }
    ]
  },
  {
    name: "weight",
    baseUnit: "gram",
    units:[
      {
        name: "gram",
        conversionSlope: 1,
        conversionOffset: 0
      },
      {
        name: "kilogram",
        conversionSlope: 0.001,
        conversionOffset: 0
      }
    ]
  }

];
