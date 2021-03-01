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
        const arrWordToGuess = this.arrWord.map(x => "_");

        return arrWordToGuess.join(' ');
    }

    checkLetter(letter) {
        console.log(letter);
        let indexWord = [];
        if (this.arrWord.includes(letter.toLowerCase())) {
            indexWord = this.find(letter.toLowerCase(), this.arrWord);
            console.log(indexWord);
            console.log("yes");
        } else {
            console.log("no");
        }
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