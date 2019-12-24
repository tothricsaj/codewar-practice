function findShort(s){
    let strArr = s.split(' '),
        shortestLenght = 100000000000;

    strArr.forEach(val => {
        if(val.length < shortestLenght) shortestLenght = val.length
    });
    return shortestLenght;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
