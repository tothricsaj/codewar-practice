function persistence(num) {
    let digits = (num + '').split('')
    
    if(digits.length === 1) {
        return 0
    } else {
        let mult = digits[0]
        for(let i=1; i<digits.length; i++) {
            mult *= digits[i]
        }

        return 1 + persistence(mult)
    }
}


console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))

