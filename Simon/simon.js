$(document).ready(function() {
    $("#OFF-toggle").click(function() {
        $("#ON-toggle").css("visibility", "visible");
        $("#OFF-toggle").css("visibility", "hidden");
    });
    
    $("#ON-toggle").click(function() {
        $("#OFF-toggle").css("visibility", "visible");
        $("#ON-toggle").css("visibility", "hidden");
    });
});