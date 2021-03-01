var words = [
    { clue: "E' tonda", word: "Pizza" },
    { clue: "E' gialla", word: "Pasta" },
    { clue: "E' famoso quello alla milanese", word: "Risotto" },
    { clue: "Si  mangia quando fa caldo", word: "Gelato" },
];

class Hangman {

    constructor() {
        this.chooseWord(words);
    }

    /**
     * Chooses the word to guess
     * @param {Array} array - The list of words 
     * @returns The object with the word to guess
     */
    chooseWord(array) {
        this.objWord = array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Shows the clue of the word to guess
     * @returns the clue
     */
    displayClue() {
        return this.objWord.clue;
    }

    /**
     * Shows the unserscore of the word to guess
     * @return a string with the unserscores 
     */
    displayWord() {
        this.word = this.objWord.word;
        this.arrWord = this.word.toLowerCase().split('');

        // Creates an array of the length of the arrWord with only unserscore string
        this.arrWordToGuess = this.arrWord.map(x => "_");

        return this.arrWordToGuess.join(' ');
    }

    checkLetter(letter) {
        let lowerLetter = letter.toLowerCase();
        let indexWord = [];

        if (this.arrWord.includes(lowerLetter)) {
            // finds the index/es of the letter in the word
            indexWord = this.find(lowerLetter, this.arrWord);
            // inserts the letter in the array of the world to guess
            this.insertLetter(lowerLetter, indexWord, this.arrWordToGuess);
            // updates the word to guess 
            this.updateDisplay();

        } else {}
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
     * Updates the html element of the word to guess
     */
    updateDisplay() {
        wordToGuess.innerHTML = this.arrWordToGuess.join(' ');
    }

}

const showClue = document.querySelector('[show-clue]');
const wordToGuess = document.querySelector('[word-to-guess]');
const letterButtons = document.querySelectorAll('[letter]');

const hangman = new Hangman();

showClue.innerHTML = hangman.displayClue();
wordToGuess.innerHTML = hangman.displayWord();

letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        hangman.checkLetter(button.innerText)
    })
});