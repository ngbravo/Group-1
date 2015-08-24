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
        else if(type === 'sepia') {
            imageOb.image.filters.push(new fabric.Image.filters.Sepia);
        }
        else if(type === 'grayscale') {
            imageOb.image.filters.push(new fabric.Image.filters.Grayscale);
        }
        else if(type === 'noise'){
            imageOb.image.filters.push(new fabric.Image.filters.Noise({noise:quantity}));
        }
        else if(type === 'pixelate'){
            imageOb.image.filters.push(new fabric.Image.filters.Pixelate({pixelate:quantity}));
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
    console.log("Pausa");
}

function modifyImage(actionFilters){
    actionsArray = new Array(actionFilters.length*2);
    for(var i = 0; i < actionFilters.length*2-1; i+=2){
        var action = actionFilters[i/2];
        var filter = filterFactory(action.filter, action.quantity);
        var liftedFilter = lift(filter);
        actionsArray[i] = liftedFilter();
        actionsArray[i+1] = lift(sleep, _.identity)();
    }

    var filters = actions(actionsArray, function(_, state) {
        return state;
    });

    filters({image:imgInstance,canvas:canvas});
}