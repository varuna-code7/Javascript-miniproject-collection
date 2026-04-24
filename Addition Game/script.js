let num1 = document.getElementById("firstNumber");
let num2 = document.getElementById("secondNumber");
let user = document.getElementById("userInput");
let para = document.getElementById("gameResult");
let checkbtn = document.getElementById("checkButton");
let restartbtn = document.getElementById("restartButton");

checkbtn.addEventListener("click", function() {

    let sum = Number(num1.textContent) + Number(num2.textContent);
    let userAnswer = Number(user.value);

    if (sum === userAnswer) {
        para.textContent = "Congratulations! You Got It";
        para.style.backgroundColor = "green";
    } else {
        para.textContent = "Please Try Again!..";
        para.style.backgroundColor = "blue";
    }

});


function generateNumbers() {
    num1.textContent = Math.ceil(Math.random() * 100);
    num2.textContent = Math.ceil(Math.random() * 100);
}

generateNumbers();


restartbtn.addEventListener("click", function() {
    generateNumbers();
    para.textContent = "";
    user.value = "";

});