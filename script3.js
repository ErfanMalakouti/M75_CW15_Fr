let buttonStart = document.querySelector(".button-start");
let buttonSet = document.querySelector(".button-set");
let buttonStop = document.querySelector(".button-stop");
let buttonReset = document.querySelector(".button-reset");
let seconds = document.querySelector(".seconds");
let min = document.querySelector(".tens");
let hours = document.querySelector(".hours");
let store = document.querySelector(".store");
buttonStart.addEventListener("click", function () {
  buttonStart.classList.toggle("disabled");
  buttonStop.classList.toggle("disabled");
  intervalID = setInterval(function () {
    seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
    if (parseInt(seconds.innerHTML) == 60) {
      min.innerHTML = parseInt(min.innerHTML) + 1;
      seconds.innerHTML = 0;
    }
    if (parseInt(min.innerHTML) == 60) {
      hours.innerHTML = parseInt(hours.innerHTML) + 1;
      min.innerHTML = 0;
    }
  }, 10);
});
buttonStop.addEventListener("click", function () {
  buttonStart.classList.toggle("disabled");
  buttonStop.classList.toggle("disabled");
  clearInterval(intervalID);
});
buttonReset.addEventListener("click", function () {
  seconds.innerHTML = 0;
  min.innerHTML = 0;
  hours.innerHTML = 0;
  store.innerHTML = "";
  clearInterval(intervalID);
  if (buttonStart.classList.contains("disabled")) {
    buttonStart.classList.remove("disabled");
    buttonStop.classList.add("disabled");
  }
});

buttonSet.addEventListener("click", function () {
  store.innerHTML += `
    <p>${parseInt(hours.innerHTML)} :
    ${parseInt(min.innerHTML)} :
    ${parseInt(seconds.innerHTML)}</p>
    `;
});
