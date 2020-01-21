function nines(n) {
    let arr = new Array(n).fill(0).map((el, i) => {
        return i;
    });

    arr.shift();
    arr.push(n);

    return arr.reduce((acc, el) => {
        // TODO treat 99 and other which is contain more than one 9 digit
        return new String(el).toString().includes('9') ? acc + 1 : acc + 0;
    }, 0);
}

console.log(nines(3950));
console.log(nines(90));
