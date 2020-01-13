// String.prototype.map = Array.prototype.map;

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
    let binArr = [];
    for(let i = str.length; i>0; i--) {
        if(str.substring(i, i-4) === '1000') {
            binArr.push('8');
            continue;
        } else if(str.substring(i, i-4) === '1001') {
            binArr.push('9');
            continue;

        }
    }

    return binArr;
}

// console.log(code('8'));
// console.log(code('9'));

// console.log(code('62'));
// console.log(code('213'));

console.log(decode(code('8')));
console.log(decode(code('9')));

