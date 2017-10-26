var howIMetYourMother = document.getElementById('himym');;
var theOffice = document.getElementById('office');
var friends = document.getElementById('friends');
var guessingWord = document.getElementById('the-word');
var turnsLeft = document.getElementById('turn-count');
var counter = 10;
var characters;
var word;
var button;
var currentState;
var currentWord;

let friendsCharacters = ['ROSS', 'RACHEL', 'MONICA', 'CHANDLER', 'JOEY', 'PHOEBE', 'URSULA', 'SQUIRRELYJOE', 'MRHECKLES', 'TAG', 'GUNTHER', 'MIKE'];
let howIMetYourMotherCharacters = ['BARNEY', 'TED', 'ROBIN', 'MARSHALL', 'LILY', 'RANJIT', 'THEMOTHER', 'GARYBLAUMAN', 'WENDYTHEWAITRESS', 'PATRICE', 'SANDYRIVERS', 'SCOOTER', 'VICTORIA', 'ZOEY', 'CARLTHEBARTENDER'];
let theOfficeCharacters = ['MICHAEL', 'JIM', 'DWIGHT', 'PAM', 'PHYLLIS', 'DARRYL', 'ANDY', 'KELLY', 'RYAN', 'KEVIN', 'STANLEY', 'HOLLY', 'OSCAR', 'ANGELA', 'ERIN', 'TOBY', 'GABE', 'MEREDITH', 'ROBERTCALIFORNIA'];

function renderState(word){
  return guessingWord.textContent = [...word].fill("_").join("");
}

function updateState(test, word, letter){
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      test[i] = letter;
    }
  }
  if(test.includes(letter)){
    counter = counter;
  } else {
    counter--;
  }
  guessingWord.textContent = test.join("");
}

function showAndHide(letter){
  let currentLetter = letter;
  let lowercaseletter = currentLetter.toLowerCase();
  let lowerCase = document.querySelector('#'+lowercaseletter);
  let showLetter = document.querySelector('#show'+letter);
  showLetter.classList.remove('hidden');
  lowerCase.classList.add('hide');
}

function startGame(charList) {
  characters = charList;
  word = characters[Math.floor((Math.random() * characters.length) + 1)];
  currentState = renderState(word);
  currentWord = [...currentState];
  turnsLeft.textContent = 'Turns Left: ' + counter;
}

howIMetYourMother.addEventListener('click', function() {
  startGame(howIMetYourMotherCharacters);
})
theOffice.addEventListener('click', function() {
  startGame(theOfficeCharacters);
})
friends.addEventListener('click', function() {
  startGame(friendsCharacters);
})
