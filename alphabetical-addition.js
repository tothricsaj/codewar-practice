function addLetters(...letters) {
    if (letters.length === 0) return 'z';

    let numChar = letters.map(el => el.charCodeAt() - 96)
           .reduce((acc, el, index, arr) => {
                if (acc >= 26) {
                acc = (acc - 26);
            }

            return acc + el
    })

    if(numChar > 26) numChar -= 26;

    return String.fromCharCode(numChar + 96);

}

/*
console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('a', 'b'))
*/
// console.log(addLetters('z'))
// console.log(addLetters('z', 'a'))
// console.log(addLetters('y', 'c', 'b'))
console.log(addLetters("s", "a", "u", "z"))
console.log(addLetters("y", "x", "i"))
