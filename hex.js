 const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// An example of a hex color: #f15025
 const btn = document.getElementById('btn');
 const color = document.querySelector('.color');

//  Adds a click event to the btn element which means whenever you click on the btn element in the page, the following function takes place.
btn.addEventListener('click', function(){
    let hexColor = '#';
    const randomNumber = getRandomNumber();
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
 });

//  Textcontent shows the textcontent of all elements in the node and its descendents. 
 function getRandomNumber(){
     return Math.floor(Math.random() * hex.length);
 }
