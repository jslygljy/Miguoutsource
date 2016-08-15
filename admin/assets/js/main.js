$(document).ready(function() {
    $.ajax({
        type: "post",
        //timeout: 2000,
        async: false,
        contentType: "text/json",
        url: "left.html",
        jsonp: 'callback',
        success: function(res) {
            $("#wrap").before(res);
        },
        error: function(err) {
            //alert(JSON.stringify(err));
        }
    });

    $("#accordion2 .accordion-group .accordion-heading").click(function() {
        $("#accordion2 .accordion-group .accordion-heading a").removeClass("active");
        $(this).find('a').addClass("active")

    })
});
