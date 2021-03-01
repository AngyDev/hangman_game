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
        let arrWord;
        this.word = this.objWord.word;
        arrWord = this.word.split('');

        // Creates an array of the length of the arrWord with only unserscore string
        const arrWordToGuess = arrWord.map(x => "_");

        return arrWordToGuess.join(' ');
    }

}

const showClue = document.querySelector('[show-clue]');
const wordToGuess = document.querySelector('[word-to-guess]');

const hangman = new Hangman();

showClue.innerHTML = hangman.displayClue();
wordToGuess.innerHTML = hangman.displayWord();