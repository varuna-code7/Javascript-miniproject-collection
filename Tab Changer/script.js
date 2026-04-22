let aboutbtn = document.getElementById("aboutButton");
let timebtn = document.getElementById("timeToVisitButton");
let attractbtn = document.getElementById("attractionsButton");

let abouttab = document.getElementById("aboutTab");
let timetab = document.getElementById("timeToVisitTab");
let attracttab = document.getElementById("attractionsTab");

//  Hide other tabs initially
timetab.style.display = "none";
attracttab.style.display = "none";

//  Function to hide all tabs
function hideAllTabs() {
    abouttab.style.display = "none";
    timetab.style.display = "none";
    attracttab.style.display = "none";
}

//  Function to remove active button style
function removeActiveButtons() {
    aboutbtn.classList.remove("selected-button");
    timebtn.classList.remove("selected-button");
    attractbtn.classList.remove("selected-button");
}

//  About button
aboutbtn.addEventListener("click", function () {
    hideAllTabs();
    removeActiveButtons();

    abouttab.style.display = "block";
    aboutbtn.classList.add("selected-button");
});

//  Time to Visit button
timebtn.addEventListener("click", function () {
    hideAllTabs();
    removeActiveButtons();

    timetab.style.display = "block";
    timebtn.classList.add("selected-button");
});

//  Attractions button
attractbtn.addEventListener("click", function () {
    hideAllTabs();
    removeActiveButtons();

    attracttab.style.display = "block";
    attractbtn.classList.add("selected-button");
});