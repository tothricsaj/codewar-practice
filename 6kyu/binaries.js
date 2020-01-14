String.prototype.map = Array.prototype.map;

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
        let digits = '0'.repeat(el.length -1); // TODO: treat the 0 character
        digits = digits + '1';
        return digits + el;
    }).join('');
}

function decode(str) {
    let binArr = [];
    let counter = 0;
    let decimal = 0;
    
    for(let i=0; i<str.length; i++) {
        if(str[i] === '0') {
            counter++;
            continue
        }
        else if(str[i] === '1') {
            counter++;
            binArr.push(str.substring(i+1, i+counter+1));
            i += counter;
            counter = 0;
        }
    }

    return binArr;
    return binArr.map((el) => {
        let binStr = el.split('').reverse().join('');
        return binStr.map(num => {
            return num === '1' ? decimal += 2 : decimal += 0;
        })
    });

    return decimal;
}

console.log(code('47'));
// console.log(code('9'));

// console.log(code('64'));
// console.log(code('213'));

// console.log(decode(code('647')));
console.log(decode(code('47')));

