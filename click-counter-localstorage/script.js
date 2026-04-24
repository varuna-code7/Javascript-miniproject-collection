let span = document.getElementById("counterValue");
let b = document.getElementById("incrementBtn");
let count = localStorage.getItem("clickCount");

if (count === null) {
    count = 0;
} else {
    count = Number(count);
}

span.textContent = count;
b.onclick = function() {
    count = count + 1;
    span.textContent = count;
    localStorage.setItem("clickCount", count);
};

let resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    count = 0;
    span.textContent = count;
    localStorage.setItem("clickCount", count);
});