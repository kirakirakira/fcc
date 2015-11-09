$(document).ready(function() {
  var counter, interval;
  var work_counter = 1500;
  var break_counter = 300;
  var paused = false;
  var working = true;

  $('#dec-work-btn').click(function() {
    if (counter > 60) {
      counter -= 60;
      $('#timeLeft').text(displayTime(counter));
    } else {
      counter = 0;
      $('#timeLeft').text(displayTime(counter));
    }
  })

  $('#inc-work-btn').click(function() {
    counter += 60;
    $('#timeLeft').text(displayTime(counter));
  })

  function displayTime(counter) {
    function countMinutes(counter) {
      return Math.floor(counter / 60);
    }

    function countSeconds(counter) {
      return (counter % 60);
    }

    if (countSeconds(counter) >= 10) {
      return (countMinutes(counter) + ":" +
        countSeconds(counter));
    } else {
      return (countMinutes(counter) + ":0" +
        countSeconds(counter));
    }
  };
  
  function stopCounting() {
    clearInterval(interval);
  }

  function startCounting() {
    interval = setInterval(function() {
      console.log(counter);
      console.log(displayTime(counter));
      $('#timeLeft').text(displayTime(counter));

      // If time is 0, time to take a break or start work
      if (counter === 0) {
        $('#timeLeft').text(displayTime(counter));
        if (working) {
          working = false;
          alert("Take a break!");
          stopCounting();
          counter = break_counter;
          startCounting();
        }
        else {
          working = true;
          alert("Back to work!");
          stopCounting();
          counter = work_counter;
          startCounting();
        }
        
      } else {
        counter--;
      }
    }, 1000);
  }
  
  

  // If user clicks the stop button, stop the timer
  $('#stop-btn').click(function() {
    console.log('hi');
    stopCounting();
  });

  $('#pause-btn').click(function() {
    if (!paused) {
      stopCounting();
      paused = true;
    } else {
      paused = false;
      startCounting();
    }
  })

  // Initial start timer
  $("#start-btn").click(function() {
    counter = work_counter;
    $("#start-btn").hide();
    $("#pause-btn").show();
    startCounting();
  });
});