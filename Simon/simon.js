$(document).ready(function() {
    
    var device_status = false;
    var count = 4;
    var color_array = [".round-left-top", ".round-left-bottom", ".round-right-top", ".round-right-bottom"];
    var keep_playing = true;
    var game_presses;
    var button_presses;
    
    $("#OFF-toggle").click(function() {
        $("#ON-toggle").css("visibility", "visible");
        $("#OFF-toggle").css("visibility", "hidden");
        game_presses = [];
        button_presses = [];
        device_status = true;
        console.log("it's on!");
        reset_colors();
        setting_timeouts();
        setTimeout(check_presses, count*3000);
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
            setTimeout(reset_colors, 500);
            button_presses.push(0);
            console.log(button_presses);
        }
    });
     
    $(".round-left-bottom").click(function() {
        if (device_status) {
            $(this).css("background-color", "#ffffb3");
            setTimeout(reset_colors, 500);
            button_presses.push(1);
            console.log(button_presses);
        }
    });
    
    $(".round-right-top").click(function() {
        if (device_status) {
            $(this).css("background-color", "#ff6666");
            setTimeout(reset_colors, 500);
            button_presses.push(2);
            console.log(button_presses);
        }
    });
    
    $(".round-right-bottom").click(function() {
        if (device_status) {
            $(this).css("background-color", "#6666ff");
            setTimeout(reset_colors, 500);
            button_presses.push(3);
            console.log(button_presses);
        }
    });
    
    
    function random_color() {
        var random_color = Math.floor((Math.random() * 4));
        console.log(random_color);
        console.log(color_array[random_color]);
        game_presses.push(random_color);
        console.log("game presses", game_presses);
        
        switch (random_color) {
            case 0:
                $(".round-left-top").css("background-color", "#b3ffb3");
                setTimeout(reset_colors, 500);
                break;
            case 1:
                $(".round-left-bottom").css("background-color", "#ffffb3");
                setTimeout(reset_colors, 500);
                break;
            case 2:
                $(".round-right-top").css("background-color", "#ff6666");
                setTimeout(reset_colors, 500);
                break;
            case 3:
                $(".round-right-bottom").css("background-color", "#6666ff");
                setTimeout(reset_colors, 500);
            default:
                break;
        }
    }
    
    function setting_timeouts() {
        for (i = 0; i < count; i++) {
            setTimeout(random_color, i*1000);
        }
    }
    
    function replay_timeouts() {
        for (j = 0; j < game_presses.length; j++) {
            setTimeout(each_color_timeouts.bind(null,j), j*1000);
        }
    }       
            
    function each_color_timeouts(j) {
        console.log("this is game_presses[j]", game_presses[j]);
        switch (game_presses[j]) {
            case 0:
                $(".round-left-top").css("background-color", "#b3ffb3");
                setTimeout(reset_colors, 500);
                break;
            case 1:
                $(".round-left-bottom").css("background-color", "#ffffb3");
                setTimeout(reset_colors, 500);
                break;
            case 2:
                $(".round-right-top").css("background-color", "#ff6666");
                setTimeout(reset_colors, 500);
                break;
            case 3:
                $(".round-right-bottom").css("background-color", "#6666ff");
                setTimeout(reset_colors, 500);
            default:
                break;
        }
    }
    
    function check_presses() {
        if (game_presses.length !== button_presses.length) {
            alert("you lose");
            keep_playing = false;
            return false;
        }
        for (var i = game_presses.length; i > 0; i--) {
            if (game_presses[i] !== button_presses[i]) {
                alert("you lose");
                keep_playing = false;
                return false;
            }
        }
        alert("you win");
        // need to increase count by 1, and add a new random color to the game press and then continue
        //count += 1;
        reset_colors();
        // this replays the last sequence once the player repeats it correctly
        replay_timeouts();
        // this goes and checks the presses again to see if they're still a winner
        // need to reset the button presses somewhere too
        setTimeout(check_presses, count*3000);
        return true;
    }
    
});