function groupAnagrams(words){
    let result = [];

    for(let i=0; i<words.length; i++) {

        let tmp = words.slice(i, words.length);
        let currentWord = words[i].split('').sort().toString();
        let anagArr = [];

        console.log(`${words} - ${words[i]} - ${i}`);

        // anagArr.push(words[i]);

        for(let n=0; n<tmp.length; n++) {

            let comparedWord = tmp[n].match(/[a-zA-z]/g).sort().toString();
            // console.log(`currentWord - ${currentWord}; comparedWord - ${comparedWord}`)

            // console.table({
            //     n: n,
            //     // words: words,
            //     currentWord: currentWord,
            //     comparedWord: comparedWord
            // });

            if(comparedWord === currentWord) {
                anagArr.push(tmp[n]);
                // console.log(words.splice(words.indexOf(tmp[n]), 1));
                // console.warn('BAANG!!!!!');
                words.splice(words.indexOf(tmp[n]), 1)
                console.log(`This is words inner loop: ${words}\n`)
            }

        }

        result.push(anagArr);
        i--;
    }

    return result;
}

console.log(groupAnagrams(["tar", "star", "tsar", "rat" ]));
