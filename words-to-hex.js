function wordsToHex(words) {
    let arr = words.split(' '),
        code = [];

    for(let i=0; i<arr.length; i++) {
        let tmp = '#';
        if(arr[i].length >=3) {
            for(let n=0; n<3; n++) {
                tmp += arr[i][n].charCodeAt().toString(16);
            }
        } else {
            for(let n=0; n<arr[i].length; n++) {
                tmp += arr[i][n].charCodeAt().toString(16);
            }

            switch(tmp.length) {
                case(1):
                    tmp += '000000';
                    break;
                case(4):
                    tmp += '0';
                    break;
                case(5):
                    tmp += '00';
                    break;
                default:
                    return;
            }

        }

        code.push(tmp);
        
    }

    return code;
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));
