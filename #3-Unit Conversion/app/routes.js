//Routes config
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'ConversionCtrl as conversionCtrl'
        })
        .when('/units',{
          templateUrl: 'partials/units.html',
          controller: 'FavoriteUnitsCtrl as unitsCtrl'
        })
        .when('/custom-formulas', {
          templateUrl: 'partials/custom-formulas.html',
          controller: 'CustomFormulasCtrl as customCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
