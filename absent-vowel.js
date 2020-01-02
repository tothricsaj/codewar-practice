String.prototype.filter = Array.prototype.filter;

function absentVowel(x){
    return x.filter(w => w === 'p');
}

absentVowel("John Doe hs seven red pples under his bsket")
absentVowel("Bb Smith sent us six neatly arranged range bicycles");
