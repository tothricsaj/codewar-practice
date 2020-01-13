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
    let counter = 0;
    
    for(let i=0; i<str.length; i++) {
        if(str[i] === '0') {
            counter++;
            continue
        }
        else if(str[i] === '1') {

        }
    }


    return binArr;
}

// console.log(code('8'));
// console.log(code('9'));

console.log(code('64'));
// console.log(code('213'));

console.log(decode(code('647')));
// console.log(decode(code('9')));

