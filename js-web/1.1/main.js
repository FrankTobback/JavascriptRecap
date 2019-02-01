let colors = document.getElementById("black")
document.getElementById('blue').addEventListener("click", turnBlue)
document.getElementById('red').addEventListener("click", turnRed)
document.getElementById('green').addEventListener("click", turnGreen)

function turnBlue() {
colors.style.backgroundColor = "blue";
}

function turnRed() {
colors.style.backgroundColor = "red";
}

function turnGreen() {
colors.style.backgroundColor = "green";
}
