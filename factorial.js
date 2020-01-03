function factorial(n){
    let res = n;

    if (n === 0) return 1;
    else if (n === 1) return 1;

    for(let i=n-1; i>0; i--) {
        res *= i;
    }

    return res;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(17));
