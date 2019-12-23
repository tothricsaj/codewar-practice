var countDeafRats = function(town) {
    let leftMouse = 0, 
        rightMouse = 0,
        deafMouses = 0,
        pidePiper = false;
    
    for(let i=0; i<town.length; i++) {
        if(town[i] == '~' && town[i+1] == 'O') {
            if (pidePiper) {
                deafMouses++;
                i++;
            }
            // rightMouse++;
            // i++;
        } else if(town[i] == 'O' && town[i+1] == '~') {
            if (!pidePiper) {
                deafMouses++;
            }
            // leftMouse++;
            // i++;
        } else if(town[i] == 'P') {
            console.log(`this is PidePiper position -> ${i}`);
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

    return deafMouses;
}

console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
