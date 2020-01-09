function code(strng) {
    let numbers = strng.split(''),
        binar = [];

    numbers.forEach(el => {

        let dec = +el,
            tmp = [];

        while(dec >= 1) {
            tmp.push(dec%2);
            dec = Math.floor(dec/2);

        }

        binar.push(tmp.reverse().join(''));

    });

    return binar.map(el => {
        let digits = '0'.repeat(el.length -1);
        digits = digits + '1';
        return digits + el;
    }).join('');
}

function decode(str) {
    // your code
}

console.log(code('3'));
console.log(code('62'));
console.log(code('213'));

