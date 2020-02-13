// function groupAnagrams(words){
//     let result = [];

//     for(let i=0; i<words.length; i++) {

//         let tmp = words.slice(i, words.length);
//         let currentWord = words[i].split('').sort().toString();
//         let anagArr = [];

//         for(let n=0; n<tmp.length; n++) {

//             let comparedWord = tmp[n].match(/[a-zA-z]/g).sort().toString();
//             if(comparedWord === currentWord) {
//                 anagArr.push(tmp[n]);
//                 words.splice(words.indexOf(tmp[n]), 1)
//             }

//         }

//         result.push(anagArr);
//         i--;
//     }

//     return result;
// }
//

function groupAnagrams(words){
  var groups = {};
  words.forEach(function(w, i) {
    var s = w.split('').sort().join('');
    groups[s] = (groups[s] || []).concat([w]);
    console.log(i)
    console.log('-------------------------------------')
    console.log(w)
    console.log(groups[s]);
    console.log(groups);
    console.log('-------------------------------------')
  });

  // console.log(groups);
  return Object.keys(groups).map(function(k) {return groups[k];});
}

console.log(groupAnagrams(["tar", "star", "rat", "tsar" ]));
