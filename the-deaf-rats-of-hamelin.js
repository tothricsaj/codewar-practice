var countDeafRats = function(town) {
    let deafMouses = 0,
        pidePiper = false;
    
    for(let i=0; i<town.length; i++) {
        if((town[i] == '~' && town[i+1] == 'O') && pidePiper) {
            deafMouses++;
        } else if((town[i] == 'O' && town[i+1] == '~') && !pidePiper) {
            deafMouses++;
        } else if(town[i] == 'P') {
            pidePiper = true;
            continue;
        } else if(town[i] == ' ') {
            continue;
        }
        i++;
    }

    return deafMouses;
}

console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
