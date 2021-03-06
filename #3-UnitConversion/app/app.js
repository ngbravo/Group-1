//Angular module
var app = angular.module('conversor', ['ngRoute','ngStorage']);

var getCategories = function($localStorage){
  if($localStorage.categories == null){
    $localStorage.categories = unitCategories;
  }
  return $localStorage.categories;
}
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "kilometer",
        isBaseUnit: false,
        conversionSlope: 1000,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "yard",
        isBaseUnit: false,
        conversionSlope: 0.9144,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "inch",
        isBaseUnit: false,
        conversionSlope: 0.0254,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "feet",
        isBaseUnit: false,
        conversionSlope: 0.3048,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "mile",
        isBaseUnit: false,
        conversionSlope: 1609.344,
        conversionOffset: 0,
        favorite:false
      }
    ]
  },
  {
    name: "weight",
    units:[
      {
        name: "kilogram",
        isBaseUnit: true,
        conversionSlope: 1,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "gram",
        isBaseUnit: false,
        conversionSlope: 0.001,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "pound",
        isBaseUnit: false,
        conversionSlope: 0.45359237,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "metric ton",
        isBaseUnit: false,
        conversionSlope: 1000,
        conversionOffset: 0,
        favorite:false
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "hectare",
        isBaseUnit: false,
        conversionSlope: 10000,
        conversionOffset: 0,
        favorite:false
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "litre",
        isBaseUnit: false,
        conversionSlope: 0.001,
        conversionOffset: 0,
        favorite:false
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "farenheit",
        isBaseUnit: false,
        conversionSlope: 5/9,
        conversionOffset: -32*5/9,
        favorite:false
      },
      {
        name: "kelvin",
        isBaseUnit: false,
        conversionSlope: 1,
        conversionOffset: -273.15,
        favorite:false
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "km/h",
        isBaseUnit: false,
        conversionSlope: 0.277777778,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "mile/h",
        isBaseUnit: false,
        conversionSlope: 0.44704,
        conversionOffset: 0,
        favorite:false
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
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "atm",
        isBaseUnit: false,
        conversionSlope: 101325,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "bar",
        isBaseUnit: false,
        conversionSlope: 100000,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "Torr",
        isBaseUnit: false,
        conversionSlope: 133.322368,
        conversionOffset: 0,
        favorite:false
      },
      {
        name: "psi",
        isBaseUnit: false,
        conversionSlope: 6894.75729,
        conversionOffset: 0,
        favorite:false
      }
    ]
  }

];
