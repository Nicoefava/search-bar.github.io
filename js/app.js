$(function(){
    $(".search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".table div").filter(function() {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(value) > -1
            )
        });
    });
});