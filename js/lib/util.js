'use strict';

var MonkeyUtil = {
  keycode: {
    VK_LEFT: 37,
    VK_UP: 38,
    VK_RIGHT: 39,
    VK_DOWN: 40
  },

  clickLeftArrowKey: function() {
    sendKey(this.keycode.VK_LEFT);
  },

  clickUpArrowKey: function() {
    sendKey(this.keycode.VK_UP);
  },

  clickRightArrowKey: function() {
    sendKey(this.keycode.VK_RIGHT);
  },

  clickDownArrowKey: function() {
    sendKey(this.keycode.VK_DOWN);
  }
};

function sendKey(keyCode) {
  var keyEvent = document.createEventObject?
    document.createEventObject():
    document.createEvent('Events');

  if(keyEvent.initEvent){
    keyEvent.initEvent('keydown', true, true);
  }

  keyEvent.keyCode = keyCode;
  keyEvent.which = keyCode;
  document.dispatchEvent?
    document.dispatchEvent(keyEvent):
    document.fireEvent('onkeydown', keyEvent);
}