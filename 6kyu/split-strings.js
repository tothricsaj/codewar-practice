function solution(str){
    if(str.length %2 === 1) str += '_';
    return str.split('').reduce((acc, val, i) => {
        console.log(i)
    }, []);
}

console.log(solution("abcdef"))
// console.log(solution("abcdefg"))
