let decrease1000 = document.getElementById("dec1000");
let decrease100 = document.getElementById("dec100");
let decrease10 = document.getElementById("dec10");
let decrease = document.getElementById("dec");
let reset = document.getElementById("reset");
let increase = document.getElementById("inc");
let increase10 = document.getElementById("inc10");
let increase100 = document.getElementById("inc100");
let increase1000 = document.getElementById("inc1000");
let multiply2 = document.getElementById("multiply2");
let multiply5 = document.getElementById("multiply5");
let multiply10 = document.getElementById("multiply10");
let divide2 = document.getElementById("divide2");
let divide5 = document.getElementById("divide5");
let divide10 = document.getElementById("divide10");

let count = 0;
let countDisplay = document.getElementById("count");

function updateDisplay() {
    countDisplay.innerText = count;
}





increase.addEventListener("click", function() {
    count = count + 1;
    console.log(count);
    updateDisplay()
})

increase10.addEventListener("click", function() {
    count = count + 10;
    console.log(count);
    updateDisplay()
})

increase100.addEventListener("click", function() {
    count = count + 100;
    console.log(count);
    updateDisplay()
})

increase1000.addEventListener("click", function() {
    count = count + 1000;
    console.log(count);
    updateDisplay()
})

decrease.addEventListener("click", function() {
    count = count - 1;
    console.log(count);
    updateDisplay()
})

decrease10.addEventListener("click", function() {
    count = count - 10;
    console.log(count);
    updateDisplay()
})

decrease100.addEventListener("click", function() {
    count = count - 100;
    console.log(count);
    updateDisplay()
})

decrease1000.addEventListener("click", function() {
    count = count - 1000;
    console.log(count);
    updateDisplay()
})

reset.addEventListener("click", function(){
    count = 0;
    console.log(count);
    updateDisplay()
})

multiply2.addEventListener("click", function(){
    count = count * 2;
    console.log(count);
    updateDisplay();
})

multiply5.addEventListener("click", function(){
    count = count * 5;
    console.log(count);
    updateDisplay();
})

multiply10.addEventListener("click", function(){
    count = count * 10;
    console.log(count);
    updateDisplay();
})

divide2.addEventListener("click", function(){
    count = count / 2;
    console.log(count);
    updateDisplay();
})

divide5.addEventListener("click", function(){
    count = count / 5;
    console.log(count);
    updateDisplay();
})

divide10.addEventListener("click", function(){
    count = count / 10;
    console.log(count);
    updateDisplay();
})




