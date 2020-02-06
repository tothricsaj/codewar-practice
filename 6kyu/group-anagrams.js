function groupAnagrams(words){
    let result = [];

    for(let i=0; i<words.length; i++) {

        let tmp = words.slice(i, words.length);
        let currentWord = words[i].split('').sort().toString();
        let tmpArr = [];

        console.log(`${words} - ${words[i]} - ${i}`);

        // tmpArr.push(words[i]);

        for(let n=0; n<tmp.length; n++) {

            let comparedWord = tmp[n].match(/[a-zA-z]/g).sort().toString();
            console.log(`currentWord - ${currentWord}; comparedWord - ${comparedWord}`)

            // console.table({
            //     n: n,
            //     // words: words,
            //     currentWord: currentWord,
            //     comparedWord: comparedWord
            // });

            if(comparedWord === currentWord) {
                tmpArr.push(tmp[n]);
                console.log(words.splice(words.indexOf(tmp[n]), 1));
                console.warn('BAANG!!!!!');
            }

        }

        result.push(tmpArr);
    }

    return result;
}

console.log(groupAnagrams(["tar", "star", "tsar", "rat" ]));
