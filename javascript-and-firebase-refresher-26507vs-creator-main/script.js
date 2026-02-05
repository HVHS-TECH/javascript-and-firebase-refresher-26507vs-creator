

function swapText() {

    var x = document.getElementById("swapText");
    if (x.innerHTML === "Welcome") {
        x.innerHTML = "You pressed the button :p";
  } else {
        x.innerHTML = "Welcome";
  }
}

function changeHeading(){
    var heading = document.getElementById("changeHeading");
    heading.innerHTML = "HOW DARE YOU!";
}


const input = document.getElementById('name');
const output = document.getElementById('output');

function printInput(){
  output.innerHTML = input.value;
}

input.addEventListener("input", function () {
  if (input.value === "") {
    output.textContent = "Welcome";
  } else {
    output.textContent = `Welcome, ${input.value}!`;
  }
});