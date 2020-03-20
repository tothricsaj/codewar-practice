function partsSums(ls) {
    return ls.map((el, i) => {
        let arr = ls.slice(i, ls.length)
        return arr.reduce((acc, num)=> {
           return acc+num
        }, 0)
    })
}

console.log(partsSums([0, 1, 3, 6, 10]))
