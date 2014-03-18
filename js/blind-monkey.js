var COMMAND_INTERVAL = 500;

var intervalId = window.setInterval(function() {
  var keyCodes = [37, 38, 39, 40], // left, up, right, down
      randomIndex = Math.floor(4 * Math.random());
  sendKey(keyCodes[randomIndex]);
}, COMMAND_INTERVAL);
