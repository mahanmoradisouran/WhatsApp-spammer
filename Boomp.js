const input = document.querySelectorAll("[contenteditable='true']")[1];

function dispatch(input, message) {
  var evt = new InputEvent("input", {
    bubbles: true,
  });
  input.innerHTML = message;
  input.dispatchEvent(evt);
  document.querySelector('span[data-icon="send"]').click();
}

function boomNow(message, count) {
  let i = 0;
  while (i < count) {
    dispatch(input, message);
    i++;
  }
}

function boomTimer(message, count, interval) {
  let i = 0;
  setInterval(() => {
    if (count > i) {
      dispatch(input, message);
      i++;
    }
  }, interval);
}
