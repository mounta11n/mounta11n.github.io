var i = 0;
var j = 0;
var blinkCount = 0;
var repeatCount = 0;

// var maxRepeat = 50;
// var txt = ['menschlich + maschinell', 'weiterer Text', 'und noch mehr Text'];
// var speed = 50;
// var pause = 1000;
// var endPause = 100;
// var startPause = 1000;
// var blinkSpeed = 500;

function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("titleTypeWriter").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    blinkCount = 0;
    setTimeout(blinkCursor, blinkSpeed);
  }
}

function blinkCursor() {
  if (blinkCount < blinkCountMax) {
    if (blinkCount % 2 == 0) {
      document.getElementById("titleTypeWriter").innerHTML += ' |';
    } else {
      document.getElementById("titleTypeWriter").innerHTML = document.getElementById("titleTypeWriter").innerHTML.slice(0, -1);
    }
    blinkCount++;
    setTimeout(blinkCursor, blinkSpeed);
  } else {
    setTimeout(reverseTypeWriter, endPause);
  }
}

function reverseTypeWriter() {
  if (i >= 0) {
    document.getElementById("titleTypeWriter").innerHTML = txt[j].substring(0, i);
    i--;
    setTimeout(reverseTypeWriter, speed);
  } else {
    j++;
    if (j < txt.length) {
      setTimeout(typeWriter, startPause);
    } else if (repeatCount < maxRepeat) {
      j = 0;
      i = 0;
      repeatCount++;
      setTimeout(typeWriter, pause);
    }
  }
}

// typeWriter();
