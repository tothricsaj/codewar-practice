function wordsToHex(words) {
    let arr = words.split(' ');

    return arr.reduce((acc, curr) => {
        let tmp = '#';

        if(curr.length >= 3) {

            console.log(curr);
            tmp += curr[0].charCodeAt();
            tmp += curr[1].charCodeAt();
            tmp += curr[2].charCodeAt();
        }

        return tmp;
    });
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));
