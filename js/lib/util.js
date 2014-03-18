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