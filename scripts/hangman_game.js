const foodWords = [
    { clue: "It's round", word: "Pizza" },
    { clue: "It's a staple food of Italian cuisine", word: "Pasta" },
    { clue: "The Milanese one is famous", word: "Risotto" },
    { clue: "It's perfect when it's hot", word: "Icicle" },
    { clue: "You drink it to stay awake", word: "Coffee" },
    { clue: "You eat it with ketchup or mayonnaise", word: "Hamburger" },
    { clue: "Fried are perfect", word: "Chips" },
];

const programing_lang = [
    { clue: "It's a backend programing language", word: "python" },
    { clue: "It's used to create beautiful page", word: "css" },
    { clue: "Without it there aren't sites", word: "html" },
    { clue: "The world's most popular programming language", word: "javascript" },
    { clue: "If you are a mathematician...", word: "matlab" },
    { clue: "It's a general-purpose scripting language", word: "php" },
    { clue: "It's a backend programing language", word: "java" },
    { clue: "Combines object-oriented and functional programming", word: "scala" },
    { clue: "It's similar to JavaScript", word: "typescript" },
    { clue: "Formula Translation", word: "fortran" },
    { clue: "Object-Oriented language", word: "csharp" }
];

class Hangman {

    constructor() {
        this.clear();
    }

    /**
     * Restores the page
     */
    clear() {
        this.objWord = "";
        this.arrWordToGuess = "";
        this.countError = 0;
        // Page element
        letterButtons.forEach(button => button.disabled = false);
        playAgain.style.display = "none";
        showClue.innerHTML = "";
        wordToGuess.innerHTML = ""
        message.innerHTML = "";
        errors.innerHTML = "";
        hangmanImg.src = "./img/hangman_white.png";
    }

    /**
     * Chooses the word to guess
     * @param {Array} array - The list of words 
     * @returns The object with the word to guess
     */
    chooseWord(array) {
        this.objWord = array[Math.floor(Math.random() * array.length)];
        // Shows the clue and the underscore for the word to guess
        showClue.innerHTML = this.showClue();
        wordToGuess.innerHTML = this.showWord();
    }

    /**
     * Shows the clue of the word to guess
     * @returns the clue
     */
    showClue() {
        return this.objWord.clue;
    }

    /**
     * Shows the unserscore of the word to guess
     * @return a string with the unserscores 
     */
    showWord() {
        this.word = this.objWord.word;
        this.arrWord = this.word.toLowerCase().split('');

        // Creates an array of the length of the arrWord with only unserscore string
        this.arrWordToGuess = this.arrWord.map(x => "_");

        return this.arrWordToGuess.join(' ');
    }

    /**
     * Checks if the letter is in the word
     * @param {String} letter 
     */
    checkLetter(letter) {
        let lowerLetter = letter.toLowerCase();
        let indexWord = [];

        if (this.arrWord.includes(lowerLetter)) {
            // finds the index/es of the letter in the word
            indexWord = this.find(lowerLetter, this.arrWord);
            // inserts the letter in the array of the world to guess
            this.insertLetter(lowerLetter, indexWord, this.arrWordToGuess);
            // updates the word to guess 
            this.updateWordToGuess();

            // checks if the word was guessed
            if (!this.arrWordToGuess.includes("_")) {
                this.gameEnd("You Win!");
            }
        } else {
            // Updates the errors counter
            this.updateMistakes();
            // If the errors are three the user has lost
            if (this.countError === 3) {
                this.gameEnd("You Lost!");
            }
        }
    }

    /**
     * Inserts the letter in the correct position in the array of the
     * word to guess
     * @param {String} letter - The letter to add in the array of the word to guess
     * @param {Array} indexes - The indexes of the letters in the word
     * @param {Array} arrWordToGuess  - The array of the word to guess
     * @returns an array with letter and underscore
     */
    insertLetter(letter, indexes, arrWordToGuess) {
        indexes.forEach((element) => arrWordToGuess.splice(element, 1, letter));
        return arrWordToGuess;
    }

    /**
     * Finds the letter in the word
     * @param {String} letter The letter to search in the array
     * @param {Array} array The word array
     * @returns An array with the indexes of the letter in the word
     */
    find(letter, array) {
        var results = [];
        array.forEach((element, index) => element === letter && results.push(index));
        return results;
    }

    /**
     * Updates the counter of errors and the hangman image
     */
    updateMistakes() {
        // updates the counter of errors
        this.countError += 1;
        // updates mistakes in the page
        errors.innerHTML = this.countError;

        hangmanImg.src = "./img/hangman_white_0" + this.countError + ".png";
    }

    /**
     * Updates the html element of the word to guess
     */
    updateWordToGuess() {
        wordToGuess.innerHTML = this.arrWordToGuess.join(' ');
    }

    /**
     * Show the message, disabled the buttons and show the play again button
     * @param {String} msg The message to show
     */
    gameEnd(msg) {
        message.innerHTML = msg;
        letterButtons.forEach(button => button.disabled = true);
        playAgain.style.display = "block";
    }

}

const programingLang = document.querySelector('[programing-lang]');
const food = document.querySelector('[food]');
const showClue = document.querySelector('[show-clue]');
const wordToGuess = document.querySelector('[word-to-guess]');
const letterButtons = document.querySelectorAll('[letter]');
const message = document.querySelector('[message]');
const playAgain = document.querySelector('[play-again]');
const hangmanImg = document.querySelector('[hangman-img]');
const errors = document.querySelector('[errors]');

programingLang.addEventListener('click', button => {
    hangman = new Hangman();
    hangman.chooseWord(programing_lang);
});

food.addEventListener('click', button => {
    hangman = new Hangman();
    hangman.chooseWord(foodWords);
});

letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        hangman.checkLetter(button.innerText);
        // The button that is clicked is disabled
        button.disabled = true;
    })
});

playAgain.addEventListener('click', button => {
    hangman = new Hangman();
});