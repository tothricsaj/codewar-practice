String.prototype.filter = Array.prototype.filter;

function absentVowel(x){
    let vowels = ['a','e','i','o','u'];
    return vowels.indexOf(vowels.filter(el => !x.includes(el))[0]);
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"));
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
