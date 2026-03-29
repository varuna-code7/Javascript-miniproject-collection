function onswitch() {
    document.getElementById("bulb").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch").textContent = "Switched On";
    document.getElementById("on").style.backgroundColor = "#20b509";
    document.getElementById("off").style.backgroundColor = "grey";
}

function offswitch() {
    document.getElementById("bulb").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch").textContent = "Switched Off";
    document.getElementById("on").style.backgroundColor = "grey";
    document.getElementById("off").style.backgroundColor = "#e81a20";
}