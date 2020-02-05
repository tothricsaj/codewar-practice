function groupAnagrams(words){
    let result = [];

    for(let i=0; i<words.length; i++) {

        let tmp = words.slice(i, words.length);
        let currentWord = words[i].split('').sort().toString();
        let tmpArr = [];

        // console.log(tmp);

        for(let n=0; n<tmp.length; n++) {

            let comparedWord = tmp[n].match(/[a-zA-z]/g).sort().toString();
            if(comparedWord === currentWord) {
                console.log(tmp);
                console.log(n);
                tmpArr.push(tmp[n]);
                words.splice(n+1, 1);
            }

        }

        words.shift();

        result.push(tmpArr);
    }

    return result;
}

console.log(groupAnagrams(["tar", "star", "tsar", "rat" ]));
