// document.querySelector('button').addEventListener('click', handleClick)
// function handleClick(){
//     alert("I've been clicked")
// }
function playNote(key) {
  // switch statement are a little cleaner than if/else.. add each sound using switch
  switch (key) {
    // if innerHTML = 'w' play sound
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      // end code
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      // end code
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      // end code
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      // end code
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      // end code
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      // end code
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      // end code
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(cKey) {
  var activeButton = document.querySelector("." + cKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// create a variable to counts the number of drums
const numOfDrums = document.querySelectorAll(".drum").length;
// create a variable for all drums, called by []
const drums = document.querySelectorAll(".drum");
// loop through all drums
for (let i = 0; i < numOfDrums; i++) {
  // In the loop add a click event listener to each drum
  drums[i].addEventListener("click", function () {
    //    create a variable to collect the inner html
    var buttonInnerHTML = this.innerHTML;
    playNote(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playNote(event.key);
  buttonAnimation(event.key);
});

// var audio = new Audio('sounds/tom-1.mp3')
//         audio.play()

// Constructer Function = name has to be capitle

// function BellBoy(name,age,hasWorkPermit,languages){
//     this.name = name
//     this.age = age
//     this.hasWorkPermit = hasWorkPermit
//     this.languages = languages
// }

// initialize constructer function

// var bellBoy1 = new BellBoy('Timmy',19,true,['French','English'])
