function code(strng) {
    let dec = +strng,
        binar = [];

    while(dec >= 1) {
        binar.push(dec%2);
        dec = Math.floor(dec/2);
    }

    return binar.reverse().join('');
}

function decode(str) {
    // your code
}

console.log(code('4'));
console.log(code('62'));
