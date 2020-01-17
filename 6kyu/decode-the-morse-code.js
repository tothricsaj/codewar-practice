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

    morseCode = morseCode.split(' ').map((el, index)=> {
        if(el === '') {
            return ' ';
        }
        if(!!el) {
            return MORSE_CODE[el].toUpperCase();
        }
    }).join('').replace(/  +/g, ' ');

    console.log(`before ${morseCode}` + 'kutya');
    // console.log(morseCode.length);

    if(morseCode[0] === ' ') morseCode = morseCode.substring(1);

    console.log(`first ${morseCode}` + 'cica');

    // if(morseCode[morseCode.length - 1] === ' ') morseCode = morseCode.substring(0, morseCode.length - 1);
    if(morseCode[morseCode.length - 1] === ' ') morseCode = morseCode.slice(0, -1);

    console.log(`second ${morseCode}` + 'mérésihiba');

    // console.log(morseCode.length);

    return morseCode;
}

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('.... .   .--- ..-   -.. .'));
// console.log(decodeMorse(' . ') + 's');
console.log(decodeMorse('   .   . ') + '$');
