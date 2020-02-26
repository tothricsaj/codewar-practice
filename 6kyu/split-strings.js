function solution(str){
    let res = [];
    if(str.length %2 === 1) str += '_';
    str.split('').forEach(( val, i) => {
        if(i%2 === 1) {
            i++;
            return true
        }
        console.log(str.slice(i,i+2))
        res.push(str.slice(i, i+2));
    });
}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))
