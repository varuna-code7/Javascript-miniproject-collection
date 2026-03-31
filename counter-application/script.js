let counterElement = document.getElementById("counterValue");

function onIncrease() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrease() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
  let a = 0;
  counterElement.textContent = a;
  counterElement.style.color = "black";
}