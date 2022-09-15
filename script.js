let numberInput = document.querySelector(".amount-input");
let convertButton = document.querySelector(".convert");
let restButton = document.querySelector(".reset");
let changeButton = document.querySelector(".change");
let resultNotif = document.querySelector(".result");
let title = document.querySelector(".title");
restButton.addEventListener("click", function () {
  numberInput.value = null;
  resultNotif.style.display = "none";
});
changeButton.addEventListener("click", function () {
  if (numberInput.placeholder === "°C") {
    numberInput.placeholder = "F";
    title.innerHTML = "Convert  F to  °C";
    document.title = "Convert  F to  °C";
  } else {
    numberInput.placeholder = "°C";
    title.innerHTML = "Convert  °C to  F";
    document.title = "Convert  °C to  F";
  }
});
convertButton.addEventListener("click", function () {
  if (isNaN(numberInput.value) || numberInput.value == "") {
    resultNotif.style.display = "block";
    resultNotif.style.color = "red";
    resultNotif.innerHTML = "Enter the right amount of value";
    setInterval(function () {
      resultNotif.style.display = "none";
    }, 5000);
  } else {
    if (numberInput.placeholder === "°C") {
      resultNum = (numberInput.value * 9) / 5 + 32;
      resultNotif.style.display = "block";
      resultNotif.style.color = "black";
      resultNotif.innerHTML = "result is : " + resultNum + " F";
    } else {
      resultNum = ((numberInput.value - 32) * 5) / 9;
      resultNotif.style.display = "block";
      resultNotif.style.color = "black";
      resultNotif.innerHTML = "result is : " + resultNum.toFixed(2) + " °C";
    }
  }
});
