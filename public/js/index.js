var howIMetYourMother = document.getElementById('himym');;
var theOffice = document.getElementById('office');
var friends = document.getElementById('friends');
var guessingWord = document.getElementById('the-word');
var turnsLeft = document.getElementById('turn-count');
var themes = document.getElementById('themes');
var counter;
var characters;
var word;
var button;
var currentState;
var currentWord;

let friendsCharacters = ['ROSS', 'RACHEL', 'MONICA', 'CHANDLER', 'JOEY', 'PHOEBE', 'URSULA', 'SQUIRRELYJOE', 'MRHECKLES', 'TAG', 'GUNTHER', 'MIKE'];
let howIMetYourMotherCharacters = ['BARNEY', 'TED', 'ROBIN', 'MARSHALL', 'LILY', 'RANJIT', 'THEMOTHER', 'GARYBLAUMAN', 'WENDYTHEWAITRESS', 'PATRICE', 'SANDYRIVERS', 'SCOOTER', 'VICTORIA', 'ZOEY', 'CARLTHEBARTENDER'];
let theOfficeCharacters = ['MICHAEL', 'JIM', 'DWIGHT', 'PAM', 'PHYLLIS', 'DARRYL', 'ANDY', 'KELLY', 'RYAN', 'KEVIN', 'STANLEY', 'HOLLY', 'OSCAR', 'ANGELA', 'ERIN', 'TOBY', 'GABE', 'MEREDITH', 'ROBERTCALIFORNIA'];
let gameOfThronesCharacters = ['DANY', 'JONSNOW', 'SANSA', 'ARYA', 'THEON', 'RENLY', 'STANNIS', 'MELISSANRE', 'DAVOS', 'ROB', 'CATLYN', 'NED', 'WILDLING', 'WHITEWALKER', 'BRAN', 'RICKON', 'OSHA', 'JORAH'];
let bigMouthCharacters = ['JESSI', 'NICK', 'ANDREW', 'DUKEWELLINGTON', 'LEAH', 'JAY', 'MISSY', 'MATTHEW', 'DEVON', 'DEVIN', 'PILLOW', 'COACHSTEVE', 'LOLA', 'HORMONEMONSTER'];
let thisIsUsCharacters = ['JACK', 'REBECCA', 'KATE', 'RANDALL', 'KEVIN', 'TOBY', 'WILLIAM', 'BETH', 'MIGUEL'];

function renderState(word) {
  var current = [...word].fill("_").join("");
  return guessingWord.textContent = current;
}

function updateState(test, word, letter) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      test[i] = letter;
    }
  }
  if (test.includes(letter)) {
    counter = counter;
  } else {
    counter--;
  }
  guessingWord.textContent = test.join("");
}

function showAndHide(letter) {
  let currentLetter = letter;
  let lowercaseletter = currentLetter.toLowerCase();
  let lowerCase = document.querySelector('#' + lowercaseletter);
  let showLetter = document.querySelector('#show' + letter);
  showLetter.classList.remove('hidden');
  lowerCase.classList.add('hide');
}

function startGame(charList) {
  characters = charList;
  word = characters[Math.floor((Math.random() * characters.length) + 1)];
  renderState(word);
  counter = 10;
  currentState = renderState(word);
  currentWord = [...currentState];
  currentTheme.textContent = 'Current Theme: '
  turnsLeft.textContent = 'Turns Left: ' + counter;
}

himym.addEventListener('click', function() {
  startGame(howIMetYourMotherCharacters);
  themes.textContent = 'How I Met Your Mother';
  
});
office.addEventListener('click', function() {
  startGame(theOfficeCharacters);
  themes.textContent = 'The Office';
});
friends.addEventListener('click', function() {
  startGame(friendsCharacters);
  themes.textContent = 'Friends';
});
got.addEventListener('click', function() {
  startGame(gameOfThronesCharacters);
  themes.textContent = 'Game of Thrones';
});
bigmouth.addEventListener('click', function() {
  startGame(bigMouthCharacters);
  themes.textContent = 'Big Mouth';
});
thisIsUs.addEventListener('click', function() {
  startGame(thisIsUsCharacters);
  themes.textContent = 'This Is Us';
});

reset.addEventListener('click', function() {
  counter = 10;
  turnsLeft.textContent = 'Turns Left: ' + counter;
  word = undefined;
})
