function addLetters(...letters) {
    return letters.map(el => el.charCodeAt() - 96);
}

console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('a', 'b'))
console.log(addLetters('z'))
console.log(addLetters('z', 'a'))
console.log(addLetters('y', 'c', 'b'))
// console.log(addLetters())
