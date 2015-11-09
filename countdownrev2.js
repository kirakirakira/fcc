

// timer

// current countdown

// decrease countdown by 1 every 1000 ms

// countdown stops when time is 0 and sends an alert

// be able to pause and then start the countdown

// be able to start countdowns with various times

var countdown;

function startTimer(time) {

	countdown = setInterval(function() {
		if (time ===0) {
			console.log("time's up!");
			clearInterval(countdown);
		}
		else {
			console.log(countMinutes(time) + ":" + countSeconds(time));
			time--;
		}
	}, 1000);
};

function countMinutes(time) {
	return Math.floor(time/60);
}

function countSeconds(time) {
	var seconds = (time % 60);
	if (seconds<10) {
		return "0" + seconds;
	}
	else {
		return seconds;
	}
}

function stopTimer(countdown) {
	clearInterval(countdown);
}




startTimer(15);