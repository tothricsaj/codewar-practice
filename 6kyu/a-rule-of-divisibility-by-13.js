function thirt(n) {
    let rem = [1, 10, 9, 12, 3, 4]
    let remIdex = -1;
    let stationary

    if(n>=0) {

        let numArr = new String(n).split('').reverse();

        return numArr.reduce((acc, val) => {
            let digit = new Number(val).valueOf();

            remIdex++

            console.table({
                remIdex: remIdex,
                currDigit: digit,
                accumulator: acc,
                remVal: rem[remIdex]
            })

            if(remIdex >= rem.length) {
                remIdex = 0
            } 

            return rem[remIdex]*digit + acc

        }, 0);

         
        return stationary
    }
}

// console.log(thirt(8529));
console.log(thirt(85299258))
// console.log(thirt(5634))
