$(document).ready(function() {
    
    var device_status = false;
    
    $("#OFF-toggle").click(function() {
        $("#ON-toggle").css("visibility", "visible");
        $("#OFF-toggle").css("visibility", "hidden");
        device_status = true;
        console.log("it's on!");
        reset_colors();
    });
    
    $("#ON-toggle").click(function() {
        $("#OFF-toggle").css("visibility", "visible");
        $("#ON-toggle").css("visibility", "hidden");
        device_status = false;
        console.log("it's off!");
        reset_colors();
    });
    
    function reset_colors() {
        $(".round-left-top").css("background-color", "green");
        $(".round-left-bottom").css("background-color", "yellow");
        $(".round-right-top").css("background-color", "red");
        $(".round-right-bottom").css("background-color", "blue");
    }
    
    $(".round-left-top").click(function() {
        if (device_status) {
            $(this).css("background-color", "#b3ffb3");
        }
    });
     
    $(".round-left-bottom").click(function() {
        if (device_status) {
            $(this).css("background-color", "#ffffb3");
        }
    });
    
    $(".round-right-top").click(function() {
        if (device_status) {
            $(this).css("background-color", "#ff6666");
        }
    });
    
    $(".round-right-bottom").click(function() {
        if (device_status) {
            $(this).css("background-color", "#6666ff");
        }
    });
});