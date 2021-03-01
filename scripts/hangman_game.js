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
     * Function that chooses the word to guess
     * @param {Array} array - The list of words 
     * @returns The object with the word to guess
     */
    chooseWord(array) {
        this.objWord = array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Function that display the clue of the word to guess
     * @returns the clue
     */
    displayClue() {
        return this.objWord.clue;
    }

}

const showClue = document.querySelector('[show-clue]');

const hangman = new Hangman();

showClue.innerHTML = hangman.displayClue();