var mInitialize = function(imageId){
    Caman(imageId, 'image.png', function(){
        this.render();
    });
    return imageId;
}

function filterFactory(type, quantity){
    return function(imageId){
        Caman(imageId, function () {
            if(type === 'sepia'){
                this.sepia(quantity);
            }
            else if(type === 'brightness'){
                this.brightness(quantity);
            }
            else if(type === 'contrast') {
                this.contrast(quantity);
            }
            else if(type === 'noise'){
                this.noise(quantity)
            }

            this.render();
        });
        console.log("type: " + type + ", q: " + quantity);
        return imageId;
    }
}

function sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > 5000){
            break;
        }
    }
}

function modifyImage(image, actionFilters){
    var mSleep = lift(sleep, _.identity);

    mInitialize(image);
    var actionsArray = new Array(actionFilters.length*2);
    for(var i = 0; i < actionFilters.length; i+=2){
        var action = actionFilters[i];
        var filter = filterFactory(action.filter, action.quantity);
        var liftedFilter = lift(filter);
        actionsArray[i] = liftedFilter();
        actionsArray[i+1] = mSleep();
    }

    var filters = actions(actionsArray, function(_, state) {
        return state;
    });

    filters(image);
}


/*var mSqr2 = lift(sqr);
var mNote2 = lift(note, _.identity);
var mNeg2 = lift(function(n) { return -n });


var negativeSqrAction2 = actions([mSqr2(), mNote2(), mNeg2()], function(_, state) {
    return state;
});

var leNumeroNegativo = negativeSqrAction2(100); // NOTE: 10000
console.log("final: " + leNumeroNegativo);*/
//=> -10000

// Elegir imagen a poner en HTML
// Definir filtros, intensidad y orden
// Definir function para texto
// Hacer veriones lift de lo anterior
// Version lift de sleep y render combinado
// Crear la acción
// Ejecutar según el input
