let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b","#0341fc"];
let buttonElement=document.getElementById("button");
let bgColor=document.getElementById("bgContainer");

function colorChange()
{
    let totalColors=bgColorsArray.length;
    let random=Math.ceil(Math.random()*totalColors);
    if(random===totalColors){
        random=totalColors-1;
    }
    let randomBgColor=bgColorsArray[random];
    bgColor.style.backgroundColor=randomBgColor;
    
}