var countDeafRats = function(town) {
    let deafMouses = 0,
        pidePiper = false;
    
    for(let i=0; i<town.length; i++) {
        if((town[i] == '~' && town[i+1] == 'O') && pidePiper) {
            console.log(`i>${i} form right`);
            deafMouses++;
            i++;
        } else if((town[i] == 'O' && town[i+1] == '~') && !pidePiper) {
            console.log(`i>${i} form left`);
            deafMouses++;
            i++;
        } else if(town[i] == 'P') {
            pidePiper = true;
        } else {
            continue;
        }
    }

    console.log('<---------------------------->');
    return deafMouses;
}

console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
