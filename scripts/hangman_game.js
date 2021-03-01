var words = [
    { clue: "E' tonda", word: "Pizza" },
    { clue: "E' gialla", word: "Pasta" },
    { clue: "E' famoso quello alla milanese", word: "Risotto" },
    { clue: "Si  mangia quando fa caldo", word: "Gelato" },
];

class Hangman {

    constructor() {

    }

    /**
     * Function that chooses the word to guess
     * @param {Array} array - The list of words 
     * @returns The object with the word to guess
     */
    chooseWord(array) {
        this.objWord = array[Math.floor(Math.random() * array.length)];
    }

}

const hangman = new Hangman();