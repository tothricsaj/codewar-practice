function thirt(n) {
    let rem = [1, 10, 9, 12, 3, 4]
    let stationary

    if(n>=0) {

        let numArr = new String(n).split('').reverse();

        numArr.forEach((val, i) => {
            let tmp = [];
            let digit = new Number(val).valueOf();

            if(i+1 >= rem.length) i = 0

            

        });

        return stationary
    }
}

console.log(thirt(8529));
console.log(thirt(85299258))
console.log(thirt(5634))
