var typeText = document.querySelector(".typeText");
var toBeTyped = "Software Developer";
var index = 0,
  isAdding = true;

function startTyping() {
  setTimeout(function () {
    typeText.innerText = toBeTyped.slice(0, index);
    if (isAdding) {
      if (index > toBeTyped.length) {
        isAdding = false;

        setTimeout(function () {
          startTyping();
        }, 3000);
        return;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isAdding = true;
      } else {
        index--;
      }
    }

    startTyping();
  }, 120);
}

startTyping();
