$(document).ready(function() {

  var work_counter = 75;
  var break_counter = 20;
  var counter;
  var newCountdown;
  var type;

  $('#dec-btn').click(function() {
    if (work_counter > 60) {
      work_counter -= 60;
      $('#countdown').text(work_counter);
    } else {
      work_counter = 0;
      $('#countdown').text(work_counter);
    }
  })

  $('#inc-btn').click(function() {
    work_counter += 60;
    $('#countdown').text(work_counter);
  })

  function startTimer(type) {

    if (type === "work") {
      counter = work_counter;
    } else if (type === "break") {
      counter = break_counter;
    }

    function countMinutes(counter) {
      return Math.floor(counter / 60);
    }

    function countSeconds(counter) {
      return (counter % 60);
    }

    var newCountdown = setInterval(function() {
      console.log(counter);

      $('#countdown').text(counter);

      if (countSeconds(counter) >= 10) {
        $('#timeLeft').text(countMinutes(counter) + ":" +
          countSeconds(counter));
      } 
      else {
        $('#timeLeft').text(countMinutes(counter) + ":0" +
          countSeconds(counter));
      }

      // If time is 0, time to take a break or start work
      if ((counter === 0) && (type === "break")) {
        $('#timeLeft').text("0:00");
        alert("Back to work!");
        clearInterval(newCountdown);
        type = "work";
        startTimer(type);
        } 
      else if ((counter === 0) && (type === "work")) {
        alert("BREAK TIME BABY!");
        clearInterval(newCountdown);
        type = "break";
        startTimer(type);
        }
      else {
        counter--;
      }
    }, 1000);

    // If user clicks the start button, resume the countdown
    $("#start-btn").click(function() {
      console.log("clicked start button " + counter);
      startTimer(type);
    });

  };

  // Initial start timer
  $("#start-btn").click(function() {
    console.log("clicked start button " + counter);
    startTimer("work");
  });

    // If user clicks the stop button, stop the timer
  $('#stop-btn').click(function() {
    clearInterval(newCountdown);
    console.log("stopped " + counter);
    console.log(type);
  });

});