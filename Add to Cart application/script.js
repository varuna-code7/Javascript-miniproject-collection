let inputEle = document.getElementById("cartItemTextInput");
let btn = document.getElementById("addBtn");
let delbtn = document.getElementById("Delbtn");
let ulEl = document.createElement('ul');
let container = document.getElementById("div");
container.appendChild(ulEl);

let value = function() {
    let list = document.createElement('li');
    if (inputEle.value=== "") {
        return;
    }
     

    list.textContent = inputEle.value;
    ulEl.appendChild(list);
    
    inputEle.value = "";
};
/*let delValue = function() {  this method dele the full list.
    //if (ulEl.lastChild) {
        ulEl.removeChild(ulEl.lastChild);
    }
};*/
let delValue = function() {
    if (ulEl.lastElementChild) {
        ulEl.removeChild(ulEl.lastElementChild);
    }
};

btn.addEventListener("click", value);
delbtn.addEventListener("click", delValue);