const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const table = {};
    Object.keys(MORSE_TABLE).forEach(function(key) {
    table[key.split('').map((elem) => elem === '.' ? elem = '10' : elem = '11').join('').padStart(10, '0')] = MORSE_TABLE[key];
    })

    let arrayLetters = [];
    while (expr !== '') {
        arrayLetters.push(expr.slice(0, 10));
        expr = expr.slice(10);
    }

    let result = arrayLetters.reduce(((acc, elem) => elem === '**********' ? acc += ' ' : acc += table[elem]), '');
    return result;
}

module.exports = {
    decode
}