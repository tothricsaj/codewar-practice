function addLetters(...letters) {
    if (letters.length === 0) return 'z';

    return String.fromCharCode(
        letters.map(el => el.charCodeAt() - 96)
        .reduce((acc, el) => {
            if (acc >= 26) acc = 0;
            return acc + el
        }) + 96);
}

console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('a', 'b'))
console.log(addLetters('z'))
console.log(addLetters('z', 'a'))
console.log(addLetters('y', 'c', 'b'))
console.log(addLetters())
