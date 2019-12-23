var countDeafRats = function(town) {
    let deafMouses = 0,
        pidePiper = false;
    
    for(let i=0; i<town.length; i++) {
        if(town[i] == '~' && town[i+1] == 'O') {
            if (pidePiper) {
                deafMouses++;
                console.log('incremented from right');
                i++;
            }
        } else if(town[i] == 'O' && town[i+1] == '~') {
            if (!pidePiper) {
                deafMouses++;
                console.log('incremented from left');
                i++;
            }
        } else if(town[i] == 'P') {
            pidePiper = true;
        } else {
            continue;
        }
    }

    /*
    console.log(`rightMouse -> ${rightMouse}`);
    console.log(`leftMouse -> ${leftMouse}`);
    console.log('<---------------------------->');
    */
    console.log('<---------------------------->');
    return deafMouses;
}

console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
