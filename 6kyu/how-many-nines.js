function nines(n) {
    let arr = new Array(n).fill(0).map((el, i) => {
        return i;
    });

    arr.shift();
    arr.push(n);

    return arr.reduce((acc, el) => {
        let tmp = new String(el).toString();
        console.log((tmp.match(/9/g) || []).length);
        return (tmp.match(/9/g) || []).length;
    }, 0);
}

console.log(nines(10));
