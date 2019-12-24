function sumDigits(number) {

    if(number < 0) {
        number *= -1;
    }

    let sum = 0;
    let arr = number.toString().split('');

    arr.forEach((val, index) =>sum += Number(val));
    return sum;
}

console.log(sumDigits(10));
console.log(sumDigits(-23));
