function finance(n) {
    let days = []
    let addVal = 2
    let returnArr = () => {
        let arr = []
        for(let i=0; i<n; i++) {
            arr.push(i)
        }
        return arr
    }

    for(let i=0; i<n; i++) {
        days.push(returnArr().map((val, index) => {
            return val + addVal
        }).fill(0, 0, i))

        addVal++
    }

    return days
}

console.log(finance(6))
