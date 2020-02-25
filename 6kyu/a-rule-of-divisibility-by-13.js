function thirt(n) {
    let rem = [1, 10, 9, 12, 3, 4]
    let stationary

    if(n>=0) {

        let numArr = new String(n).split('').reverse();

        return numArr.reduce((acc, val, i) => {
            let digit = new Number(val).valueOf();

            console.log(`i-> ${i} ----- digit -> ${digit}`)
            console.log(`acc -> ${acc}`)
            console.log(`rem[i] -> ${rem[i]}`)

            if(i+1 >= rem.length) i = 0

            return rem[i]*digit + acc

        }, 0);

         
        return stationary
    }
}

console.log(thirt(8529));
// console.log(thirt(85299258))
// console.log(thirt(5634))
