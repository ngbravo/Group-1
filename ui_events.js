$( document ).ready(function() {

    $('.checkbox').change(function() {
        var filterType = $(this).attr('id').slice(9);
        if($(this).is(":checked")) {
            var filterIntensity = $('#quantity-'+filterType).val();
            var toAppend = "<li id="+filterType+"-li>"+filterType + ", q:"+filterIntensity+"</li>";
            $('#ordered-list').append(toAppend);
        }
        else{
            $("#"+filterType+"-li").remove()
        }

    });

    $("#button").click(function(){
        modifyImage('#image-id', [{'filter':'sepia','quantity':100},{'filter':'brightness','quantity':-10},{'filter':'brightness','quantity':10}]);
    });

});