const audio1 = new Audio("sounds/Cat-Meow.mp3");
const audio2 = new Audio("sounds/Cat-Purr.mp3");
const button1 = document.getElementById("meow-button");
const button2 = document.getElementById("purr-button");

button1.addEventListener("click", () => {
    audio1.play();
});

button2.addEventListener("click", () => {
    audio2.play();
});

