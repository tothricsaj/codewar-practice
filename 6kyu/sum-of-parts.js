function partsSums(ls) {
    let res

    if(ls.length === 0) return [0]

    res = ls.map((el, i) => {
        let arr = ls.slice(i, ls.length)
        return arr.reduce((acc, num)=> {
           return acc+num
        }, 0)
    })

    res.push(0)

    return res
}

console.log(partsSums([0, 1, 3, 6, 10]))
