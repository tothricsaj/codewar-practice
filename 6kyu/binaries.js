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

        if(el.length === 0) return '10'

        let digits = '0'.repeat(el.length -1);
        digits = digits + '1';

        return digits + el;
        
    }).join('');
}

function decode(str) {
    let binArr = [],
        counter = 0,
        decimal = 0;
    
    for(let i=0; i<str.length; i++) {

        if(str[i] === '1' && str[i+1] === '0') {
            console.log(`i -> ${i} str[i] -> ${str[i]} str[i+1] -> ${str[i+1]}`);
            binArr.push('0');
            i += 1;
            continue;
        }

        if(str[i] === '1' && str[i+1] === '1') {
            binArr.push('1');
            i += 1;
            continue;
        }

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

    return binArr.map((el) => {
        decimal = 0;
        let binStr = el.split('').reverse().join('');
        // console.log(`binStr -> ${binStr}`);
        for(let i=0; i<binStr.length; i++) {
            // console.log(`i -> ${i}`)
            // console.log(`binStr[i] -> ${binStr[i]}`)
            if(binStr[i] === '1') decimal += 2**i;

            // console.log(`decimal -> ${decimal}`)
        }
        return decimal;
    }).join('');

    return decimal;
}

console.log(code('10111213'));
console.log('11101111110110110111');
console.log('--------------------------')
console.log(decode(code('11101111110110110111')));
console.log('10111213');


/*
console.log(code('47'));
console.log(decode(code('47')));

console.log(code('2'));
console.log(decode(code('2')));

console.log(code('64'));
console.log(decode(code('64')));
*/
