function countValue() {
    return this.numArr.reduce((acc, val) => {
        let digit = new Number(val).valueOf();
        let res;

        this.remIdex++

        res = this.rem[remIdex]*digit + acc;

        if(this.remIdex+1 >= this.rem.length) {
            this.remIdex = -1
        } 

        return res;

    }, 0)
}

function thirt(n) {
    this.rem = [1, 10, 9, 12, 3, 4]
    this.remIdex = -1;

    let stationary;

    if(n>=0) {

        this.numArr = new String(n).split('').reverse();

        for(let i=0; i<3; i++) {
            stationary = countValue();

            this.numArr = new String(stationary).split('').reverse();

            this.remIdex = -1;
        }

        return stationary;
    }
}

console.log(thirt(8529));
// console.log(thirt(85299258))
// console.log(thirt(5634))
