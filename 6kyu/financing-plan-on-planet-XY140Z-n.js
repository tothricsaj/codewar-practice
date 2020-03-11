function finance(n) {
    let days = []
    let addVal = 0
    let returnArr = () => {
        let arr = []
        for(let i=0; i<n; i++) {
            arr.push(i)
        }
        return arr
    }

    for(let i=0; i<n; i++) {
        days.push(returnArr().map((val, index) => {
            console.log(index)
            if (index !== 0) return val + addVal
            else return val
        }).fill(0, 0, i))

        addVal++
    }

    return days.reduce((acc, val, i) => {
        return acc + val.reduce((accIn, valIn, iIn) => {
            return accIn + valIn
        }, 0)
    }, 0)
}

console.log(finance(6))
