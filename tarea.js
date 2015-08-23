

var mSqr2 = lift(sqr);
var mNote2 = lift(note, _.identity);
var mNeg2 = lift(function(n) { return -n });


var negativeSqrAction2 = actions([mSqr2(), mNote2(), mNeg2()], function(_, state) {
    return state;
});

var leNumeroNegativo = negativeSqrAction2(100); // NOTE: 10000
console.log("final: " + leNumeroNegativo);
//=> -10000

// Elegir imagen a poner en HTML
// Definir filtros, intenidad y orden
// Definir function para texto
// Hacer veriones lift de lo anterior
// Version lift de sleep y render combinado
// Crear la acción
// Ejecutar según el input
