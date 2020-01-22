function nines(n) {
    let arr = new Array(Number(n)).fill(0).map((el, i) => i);

    arr.shift();
    arr.push(n);

    return BigInt(
        arr.reduce((acc, el) => {
            return new String(el).toString().includes('9') ? acc + 1 : acc + 0;
        }, 0)
    )
}

console.log(nines(3950n));
console.log(nines(9n));
console.log(nines(1000n));


console.log(21n);
