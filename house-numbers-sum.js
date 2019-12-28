function houseNumbersSum(inputArray) {
    let arr;

    if (inputArray[0] !== 0) arr = inputArray.slice(0, inputArray.indexOf(0));
    else return 0;
    
    return arr.reduce((acc, curVal) => acc + curVal);

}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
