function groupAnagrams(words){
    let result = [];

    for(let i=0; i<words.length; i++) {
        let tmp = words.slice(i, words.length);
        let currentWord = words[i].split('').sort().toString();
        let tmpArr = [];

        console.log(tmp);

        for(let n=0; n<tmp.length; n++) {
           let comparedWord = tmp[n].match(/[a-zA-z]/g).sort().toString();
            if(comparedWord === currentWord) {
                tmpArr.push(tmp[n]);
            }

        }

        result.push(tmpArr);
    }

    return result;
}

console.log(groupAnagrams(["rat", "tar", "star", "tsar"]));
