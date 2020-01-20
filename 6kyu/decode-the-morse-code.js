const MORSE_CODE = {
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
}

decodeMorse = function(morseCode){

    function decodeLetter(letter) {
        return MORSE_CODE[letter];
    }

    function decodeWord(word) {
        return word.split(' ').map(decodeLetter).join('');
    }

    return morseCode.trim().split('   ').map(decodeWord).join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('.... .   .--- ..-   -.. .'));
// console.log(decodeMorse(' . ') + 's');
// console.log(decodeMorse('   .   . ') + '$');
