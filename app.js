const colors = ["green", "blue", "rgba(133,122,200)", 
"#f15025", "rgba(120, 157, 220, 0.5)", "rgba(196, 158, 103, 0.747)", "rgb(255,255,255)"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click', function(){

    // The goal is to get a random number between 0 and 3.
    const randomNumber = getRandomNumber();
    // console.log(document.body);
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
