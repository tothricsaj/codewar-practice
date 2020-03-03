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

    for(let i=0; i<=n; i++) {
        days.push(returnArr().fill(0, 0, i))
    }

    return days
}

console.log(finance(6))
