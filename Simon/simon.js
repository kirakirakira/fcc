$(document).ready(function() {
    
    var device_status = false;
    var count = 1;
    var color_array = [".round-left-top", ".round-left-bottom", ".round-right-top", ".round-right-bottom"];
    var keep_playing = true;
    var game_presses;
    var button_presses;
    var strict_mode = false;
    var game_start = false;
    
    window.timeoutList = new Array();
    window.intervalList = new Array();

    window.oldSetTimeout = window.setTimeout;
    window.oldSetInterval = window.setInterval;
    window.oldClearTimeout = window.clearTimeout;
    window.oldClearInterval = window.clearInterval;

    window.setTimeout = function(code, delay) {
        var retval = window.oldSetTimeout(code, delay);
        window.timeoutList.push(retval);
        return retval;
    };
    window.clearTimeout = function(id) {
        var ind = window.timeoutList.indexOf(id);
        if(ind >= 0) {
            window.timeoutList.splice(ind, 1);
        }
        var retval = window.oldClearTimeout(id);
        return retval;
    };
    window.setInterval = function(code, delay) {
        var retval = window.oldSetInterval(code, delay);
        window.intervalList.push(retval);
        return retval;
    };
    window.clearInterval = function(id) {
        var ind = window.intervalList.indexOf(id);
        if(ind >= 0) {
            window.intervalList.splice(ind, 1);
        }
        var retval = window.oldClearInterval(id);
        return retval;
    };
    window.clearAllTimeouts = function() {
        for(var i in window.timeoutList) {
            window.oldClearTimeout(window.timeoutList[i]);
        }
        window.timeoutList = new Array();
    };
    window.clearAllIntervals = function() {
        for(var i in window.intervalList) {
            window.oldClearInterval(window.intervalList[i]);
        }
        window.intervalList = new Array();
    };
    
    $("#strict-button").click(function() {
        $("#strict-button").css("background-color", "lightgreen");
        strict_mode = true;
    })
    
    $("#start-button").click(function() {
        $("#start-button").css("background-color", "lightgreen");
        game_start = true;
        $("#current-count").text(count);
        setting_timeouts();
        //setTimeout(check_presses, count*2000);
    })
         
    $("#OFF-toggle").click(function() {
        $("#ON-toggle").css("visibility", "visible");
        $("#OFF-toggle").css("visibility", "hidden");
        game_presses = [];
        button_presses = [];
        device_status = true;
        console.log("it's on!");
        reset_colors();
    });
    
    $("#ON-toggle").click(function() {
        $("#OFF-toggle").css("visibility", "visible");
        $("#ON-toggle").css("visibility", "hidden");
        $("#start-button").css("background-color", "red");
        game_start = false;
        $("#strict-button").css("background-color", "yellow");
        strict_mode = false;
        device_status = false;
        console.log("it's off!");
        $("#current-count").text("");
        reset_colors();
        // need to clear timeouts
        clearAllTimeouts();
        // reset count back to 1
        count = 1;

    });
    
    function reset_colors() {
        $(".round-left-top").css("background-color", "green");
        $(".round-left-bottom").css("background-color", "yellow");
        $(".round-right-top").css("background-color", "red");
        $(".round-right-bottom").css("background-color", "blue");
    }
    
    $(".round-left-top").click(function() {
        if (device_status && game_start) {
            $(this).css("background-color", "#b3ffb3");
            setTimeout(reset_colors, 500);
            button_presses.push(0);
            console.log(button_presses);
            
            if (button_presses.length === count) {
                setTimeout(check_presses,500);
            }
        }
    });
     
    $(".round-left-bottom").click(function() {
        if (device_status && game_start) {
            $(this).css("background-color", "#ffffb3");
            setTimeout(reset_colors, 500);
            button_presses.push(1);
            console.log(button_presses);
            
            if (button_presses.length === count) {
                setTimeout(check_presses,500);
            }
        }
    });
    
    $(".round-right-top").click(function() {
        if (device_status && game_start) {
            $(this).css("background-color", "#ff6666");
            setTimeout(reset_colors, 500);
            button_presses.push(2);
            console.log(button_presses);
            
            if (button_presses.length === count) {
                setTimeout(check_presses,500);
            }
        }
    });
    
    $(".round-right-bottom").click(function() {
        if (device_status && game_start) {
            $(this).css("background-color", "#6666ff");
            setTimeout(reset_colors, 500);
            button_presses.push(3);
            console.log(button_presses);
            
            if (button_presses.length === count) {
                setTimeout(check_presses,500);
            }
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
            console.log("you lose");
            keep_playing = false;
            return false;
        }
        for (var i = game_presses.length; i > 0; i--) {
            if (game_presses[i] !== button_presses[i]) {
                console.log("you lose");
                keep_playing = false;
                return false;
            }
        }
        
        console.log("you win");
        // reset the player's button presses back to nothing
        button_presses = [];
        // increase count by 1, and add a new random color to the game press and then continue
        reset_colors();
        count += 1;
        $("#current-count").text(count);
        game_presses.push(Math.floor((Math.random() * 4)));
        // this replays the last sequence plus the new one once the player repeats it correctly
        setTimeout(replay_timeouts,500);
        return true;
    }
    
});