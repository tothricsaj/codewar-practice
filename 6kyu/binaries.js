function code(strng) {
    let numbers = strng.split(''),
        binar = [];

    numbers.forEach(el => {

        let dec = +el;

        while(dec >= 1) {
            binar.push(dec%2);
            dec = Math.floor(dec/2);
        }

    });

    return binar.reverse().join('');
}

function decode(str) {
    // your code
}

console.log(code('4'));
console.log(code('62'));
