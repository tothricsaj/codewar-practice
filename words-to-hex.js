function wordsToHex(words) {
    let arr = words.split(' '),
        code = [];

    // return words.charCodeAt();

    for(let i=0; i<arr.length; i++) {
        let tmp = '#';
        if(arr[i].length >=3) {
            for(let n=0; n<3; n++) {
                tmp += arr[i][n].charCodeAt();
            }
        }

        code.push(tmp);
        
    }

    return code;
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));
