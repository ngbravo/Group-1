$( document ).ready(function() {

    $('.checkbox').change(function() {
        var filterType = $(this).attr('id').slice(9);
        if($(this).is(":checked")) {
            var filterQuantity = $('#quantity-'+filterType).val();
            var toAppend = "<li id='"+filterType+"-li'><span class='filterType'>"+filterType+"</span>, q:<span class='filterQuantity'>"+filterQuantity+"</span></li>";
            $('#ordered-list').append(toAppend);
        }
        else{
            $("#"+filterType+"-li").remove()
        }

    });

    $("#button").click(function(){

        filtersArray = [];
        $("li").each(function() {
            var type = $(this).find(".filterType").text();
            var quantity = $(this).find(".filterQuantity").text();

            filtersArray.push({'filter': type, 'quantity': quantity});

        });
        //modifyImage('#image-id', filtersArray);

        modifyImage('#image-id', [{'filter':'noise','quantity':100},{'filter':'brightness','quantity':-100},{'filter':'brightness','quantity':-100}]);
    });

});