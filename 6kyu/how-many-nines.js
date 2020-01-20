function nines(n) {
    let arr = new Array(n).fill(0).map((el, i) => {
        return i;
    });

    arr.shift();
    arr.push(n);

    return arr;
}

console.log(nines(10));
