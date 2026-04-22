let bg=document.getElementById("bgColorInput");
let fc=document.getElementById("fontColorInput");
let fs=document.getElementById("fontSizeInput");
let fw=document.getElementById("fontWeightInput");
let pd=document.getElementById("paddingInput");
let br=document.getElementById("borderRadiusInput");
let btn=document.getElementById("customButton");
let abtn=document.getElementById("applyButton");
let h=document.getElementById("head");
abtn.addEventListener("click",function()
{
    btn.style.backgroundColor = bg.value;
    btn.style.color = fc.value;
    btn.style.fontSize = fs.value;
    btn.style.fontWeight = fw.value;
    btn.style.padding = pd.value;
    btn.style.borderRadius = br.value;
    h.textContent = "Button Style Applied!";
});