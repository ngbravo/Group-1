$( document ).ready(function() {

    $('.checkbox').change(function() {
        var filterType = $(this).attr('id').slice(9);
        if($(this).is(":checked")) {
            var filterQuantity = $('#quantity-'+filterType).val();
            if(filterQuantity === ""){
                filterQuantity = 0;
            }
            var toAppend = "<li id='"+filterType+"-li'><span class='filterType'>"+filterType+"</span>, q:<span class='filterQuantity'>"+filterQuantity+"</span></li>";
            $('#ordered-list').append(toAppend);
        }
        else{
            $("#"+filterType+"-li").remove()
        }
    });

    $('.numberBox').change(function() {
        var newText = $(this).val();
        var filterType = $(this).attr('id').slice(9);
        if($("#checkbox-"+filterType).is(":checked")) {
            $("#"+filterType+"-li").find(".filterQuantity").text(newText);
        }
    });

    $("#button").click(function(){
        filtersArray = [];
        $("li").each(function() {
            var type = $(this).find(".filterType").text();
            var quantity = $(this).find(".filterQuantity").text();

            filtersArray.push({'filter': type, 'quantity': quantity});

        });
        modifyImage(filtersArray);

        //modifyImage('#image-id', [{'filter':'noise','quantity':100},{'filter':'brightness','quantity':-100},{'filter':'brightness','quantity':-100}]);
    });

});