

var button = document.querySelector("button");
var p = document.querySelector("p");

button.addEventListener("click", function(){
    document.body.classList.toggle("pink");
    p.textContent = "Someone clicked the button!";
});