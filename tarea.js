var canvas;
var imgInstance;
$(document).ready(function(){
    canvas = new fabric.StaticCanvas('image');
    var imgElement = document.getElementById('image-id');
    imgInstance = new fabric.Image(imgElement);
    canvas.add(imgInstance);

});

function filterFactory(type, quantity){
    return function(imageOb){
        if(type === 'invert'){
            imageOb.image.filters.push(new fabric.Image.filters.Invert());
        }
        else if(type === 'noise'){
            imageOb.image.filters.push(new fabric.Image.filters.Noise({noise:quantity}));
        }
        else if(type === 'brightness'){
            imageOb.image.filters.push(new fabric.Image.filters.Brightness({brightness:quantity}));
        }
        imageOb.image.applyFilters(imageOb.canvas.renderAll.bind(imageOb.canvas));
        console.log("type: " + type + ", q: " + quantity);
        return imageOb;
    }
}

function sleep() {
    alert("Pausa");
}

function modifyImage(image, actionFilters){
    actionsArray = [lift(filterFactory('brightness',100))(),lift(sleep, _.identity)(),lift(filterFactory('noise',100))(),lift(sleep, _.identity)()];

    var filters = actions(actionsArray, function(_, state) {
        return state;
    });

    filters({image:imgInstance,canvas:canvas});
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
