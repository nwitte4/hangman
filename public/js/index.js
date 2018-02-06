var howIMetYourMother = document.getElementById('himym');;
var theOffice = document.getElementById('office');
var friends = document.getElementById('friends');
var guessingWord = document.getElementById('theword');
var turnsLeft = document.getElementById('turn-count');
var themes = document.getElementById('themes');
var backgroundimg = document.getElementById('backgroundimg');
var counter, characters, word, currentState, currentWord;

// character themes
let friendsCharacters = ['ROSS', 'RACHEL', 'MONICA', 'CHANDLER', 'JOEY', 'PHOEBE', 'URSULA', 'SQUIRRELYJOE', 'MRHECKLES', 'TAG', 'GUNTHER', 'MIKE'];
let howIMetYourMotherCharacters = ['BARNEY', 'TED', 'ROBIN', 'MARSHALL', 'LILY', 'RANJIT', 'THEMOTHER', 'GARYBLAUMAN', 'WENDYTHEWAITRESS', 'PATRICE', 'SANDYRIVERS', 'SCOOTER', 'VICTORIA', 'ZOEY', 'CARLTHEBARTENDER'];
let theOfficeCharacters = ['MICHAEL', 'JIM', 'DWIGHT', 'PAM', 'PHYLLIS', 'DARRYL', 'ANDY', 'KELLY', 'RYAN', 'KEVIN', 'STANLEY', 'HOLLY', 'OSCAR', 'ANGELA', 'ERIN', 'TOBY', 'GABE', 'MEREDITH', 'ROBERTCALIFORNIA'];
let gameOfThronesCharacters = ['DANY', 'JONSNOW', 'SANSA', 'ARYA', 'THEON', 'RENLY', 'STANNIS', 'MELISSANRE', 'DAVOS', 'ROB', 'CATLYN', 'NED', 'WILDLING', 'WHITEWALKER', 'BRAN', 'RICKON', 'OSHA', 'JORAH'];
let bigMouthCharacters = ['JESSI', 'NICK', 'ANDREW', 'DUKEWELLINGTON', 'LEAH', 'JAY', 'MISSY', 'MATTHEW', 'DEVON', 'DEVIN', 'PILLOW', 'COACHSTEVE', 'LOLA', 'HORMONEMONSTER'];
let thisIsUsCharacters = ['JACK', 'REBECCA', 'KATE', 'RANDALL', 'KEVIN', 'TOBY', 'WILLIAM', 'BETH', 'MIGUEL'];


// creates blank word
function renderState(word) {
  return guessingWord.textContent = [...word].fill("_").join("");
}


// updates word if letter is correct
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


// shows and hides letters
function showAndHide(letter) {
  let currentLetter = letter;
  let lowercaseletter = currentLetter.toLowerCase();
  let lowerCase = document.querySelector('#' + lowercaseletter);
  let showLetter = document.querySelector('#show' + letter);
  showLetter.classList.remove('hidden');
  lowerCase.classList.add('hide');
}


// validates word has been chosen
function validateWord() {
  if (word === undefined) {
    return alert('You must choose a theme first!!');
  }
}


// starts game
function startGame(charList) {
  characters = charList;
  word = characters[Math.floor((Math.random() * characters.length))];
  renderState(word);
  counter = 10;
  resetLetters();
  currentState = renderState(word);
  currentWord = [...currentState];
  turnsLeft.textContent = 'Turns Left: ' + counter;
}

function makeVars(alphabet) {
  var variableArray = [];
  for (let i = 0; i < alphabet.length; i++) {
    let lowercase = alphabet[i];
    let capitalize = document.getElementById(`${lowercase}`);
    variableArray.push(capitalize);
  }
  return variableArray;
}

makeVars('abcdefghijklmnopqrstuvwxyz');


function hideLetter(lowercaseLetter) {
  let letter = lowercaseLetter.toUpperCase();
  validateWord();
  showAndHide(letter);
  updateState(currentWord, word, letter);

  turnsLeft.textContent = 'Turns Left: ' + counter;

  if (currentWord.join("") === word) {
    backgroundimg.src = "img/Winner.png";
    guessingWord.textContent = word;
  }
  if (counter <= 0) {
    guessingWord.textContent = "You've been bested by: " + word;
    backgroundimg.src = "img/images.png";
  } else if (counter < 0) {
    counter = 0;
  }

}


// solely for background animation
window.onanimationend = function(e) {
  e.target.classList.remove('animate');
}


// starts game with new word for each array of characters
himym.addEventListener('click', function() {
  startGame(howIMetYourMotherCharacters);
  themes.textContent = 'Current Theme is: How I Met Your Mother';
  backgroundimg.classList.add('animate');
  backgroundimg.src = "img/himym.jpg";
});
office.addEventListener('click', function() {
  startGame(theOfficeCharacters);
  themes.textContent = 'Current Theme is: The Office';
  backgroundimg.classList.add('animate');
  backgroundimg.src = "img/office.jpg";
});
friends.addEventListener('click', function() {
  startGame(friendsCharacters);
  themes.textContent = 'Current Theme is: Friends';
  backgroundimg.classList.add('animate');
  backgroundimg.src = "img/friends.jpg";
});
got.addEventListener('click', function() {
  startGame(gameOfThronesCharacters);
  themes.textContent = 'Current Theme is: Game of Thrones';
  backgroundimg.classList.add('animate');
  backgroundimg.src = "img/wic.png";
});
bigmouth.addEventListener('click', function() {
  startGame(bigMouthCharacters);
  themes.textContent = 'Current Theme is: Big Mouth';
  backgroundimg.classList.add('animate');
  backgroundimg.src = "img/bigmouth.png";
});
thisIsUs.addEventListener('click', function() {
  startGame(thisIsUsCharacters);
  backgroundimg.src = "img/tiu.jpg";
  themes.textContent = 'Current Theme is: This Is Us';
  backgroundimg.classList.add('animate');
});

// all code below here affects reset functionality/button

function resetLetters() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alphabet.length; i++) {
    let upperCase = 'show' + `${alphabet[i].toUpperCase()}`;
    let lowerCase = alphabet[i];
    lowerCaseLetter = document.getElementById(`${lowerCase}`);
    showUpperCaseLetter = document.getElementById(`${upperCase}`)

    lowerCaseLetter.classList.remove('hide');
    showUpperCaseLetter.classList.add('hidden');
  }
}

reset.addEventListener('click', function() {
  counter = 10;
  turnsLeft.textContent = 'Turns Left: ' + counter;
  word = undefined;
  resetLetters();
  themes.textContent = 'Choose a Theme:';
  theword.textContent = 'Guess Me!'
  backgroundimg.src = "img/bg.png";
})
