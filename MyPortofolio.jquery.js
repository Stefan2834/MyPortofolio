$(document).ready(function() {
    setTimeout(function() {
        $("#page").fadeIn(2000);
        $("#loading").fadeOut(2000, function() {
            $("body").css("overflow-y", "scroll");
        });
    }, 2000)
});