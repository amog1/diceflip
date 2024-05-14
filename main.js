// COIN FLIP SIMULATOR
// html variables

let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
// count variables
let numHeads = 0;
let numTails = 0;

//  Button event listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();

  //    Simulatete the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src= 'img/heads.png'/>";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src= 'img/tails.png'/>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// Dice flip simulator
let outPut2El = document.getElementById("output2");
let numOne = document.getElementById("one");
let numTwo = document.getElementById("two");
let numThree = document.getElementById("three");
let numFour = document.getElementById("four");
let numFive = document.getElementById("five");
let numSix = document.getElementById("six");

// dice numbers
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let count = 0;
// event listner
document.getElementById("btn2").addEventListener("click", flipDice);

// event functon
function flipDice() {
  // Generate a random number
  let randomNum = Math.floor(Math.random() * 6 + 1);
  console.log = randomNum;

  // simulate the dice flip
  if (randomNum <= 1) {
    outPut2El.innerHTML = "<img src= 'img/1.png'/>";
    one += 1;
    numOne.innerHTML = one;
  } else if (randomNum <= 2) {
    outPut2El.innerHTML = "<img src= 'img/2.png'/>";
    two += 1;
    numTwo.innerHTML = two;
  } else if (randomNum <= 3) {
    outPut2El.innerHTML = "<img src= 'img/3.png'/>";
    three += 1;
    numThree.innerHTML = three;
  } else if (randomNum <= 4) {
    outPut2El.innerHTML = "<img src= 'img/4.png'/>";
    four += 1;
    numFour.innerHTML = four;
  } else if (randomNum <= 5) {
    outPut2El.innerHTML = "<img src= 'img/5.png'/>";
    five += 1;
    numFive.innerHTML = five;
  } else {
    outPut2El.innerHTML = "<img src= 'img/6.png'/>";
    six += 1;
    numSix.innerHTML = six;
  }
}
