class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 8;
    // ... your code goes here
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random()* this.words.length)];
    return this.secretWord;
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91){
      return true
       } else { 
      return false
       }
  }

  checkClickedLetters(letter) {
  
  if (this.letters.includes(letter)){
    return false
  }else {
    this.letters.push(letter)
    return true
  }
  
  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
