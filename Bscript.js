var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".Random");

function gradient() {
    body.style.backgroundImage = "linear-gradient( 180deg, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}


button.addEventListener("click", function() {
    console.log("aa");
});
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);