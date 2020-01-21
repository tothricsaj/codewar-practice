function nines(n) {
    let arr = new Array(n).fill(0).map((el, i) => i);

    arr.shift();
    arr.push(n);

    return arr.reduce((acc, el) => {
        return new String(el).toString().includes('9') ? acc + 1 : acc + 0;
    }, 0);
}

console.log(nines(3950));
console.log(nines(90));
