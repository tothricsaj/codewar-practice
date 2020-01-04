function addLetters(...letters) {
    return String.fromCharCode((letters.reduce((a, b) => a+b.charCodeAt()-96, 0)+25)%26+97)
}

console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('a', 'b'))
console.log(addLetters('z'))
console.log(addLetters('z', 'a'))
console.log(addLetters('y', 'c', 'b'))
console.log(addLetters("s", "a", "u", "z"))
console.log(addLetters("y", "x", "i"))
