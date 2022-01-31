const input = document.querySelectorAll("[contenteditable='true']")[1];
const btn = document.querySelector('span[data-icon="send"]');

function dispatch(input, message) {
  var evt = new InputEvent('input', {
    bubbles: true,
  });
  input.innerHTML = message;
  input.dispatchEvent(evt);
  btn.click();
}

function bombPouria(message, count) {
  let i = 0;
  while (i < count) {
    dispatch(input, message);
    i++;
  }
}