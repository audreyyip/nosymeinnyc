let body = document.body;
let button = document.querySelector(".colorMode");
let modeText = document.querySelector(".mode-text");

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  
  // Change the text based on current mode
  if (body.classList.contains("light")) {
    modeText.textContent = "Light Mode";
  } else {
    modeText.textContent = "Dark Mode";
  }
}

button.addEventListener("click", turnOnLight);