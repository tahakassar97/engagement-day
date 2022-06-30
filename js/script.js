var countDownDate = new Date("Jun 30, 2022 21:00:").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  (document.getElementById("days").innerText = Math.floor(days)),
    (document.getElementById("hours").innerText = Math.floor(hours)),
    (document.getElementById("minutes").innerText = Math.floor(minutes)),
    (document.getElementById("seconds").innerText = Math.floor(seconds));
  // If the count down is over, write some text
  if (distance < 0) {
    document.getElementById("headline").innerText = "It's our engagement!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
  }
}, 1000);
