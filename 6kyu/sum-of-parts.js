// Iterrative solution (timeout but it works)
//
// function partsSums(ls) {
//     let res

//     if(ls.length === 0) return [0]

//     res = ls.map((el, i) => {
//         let arr = ls.slice(i, ls.length)
//         return arr.reduce((acc, num)=> {
//            return acc+num
//         }, 0)
//     })

//     res.push(0)

//     return res
// }
//

let result = []

function countElements(ls) {
    return ls.reduce((a, b) => a+b)
}

function partsSums(ls) {

    if(ls.length === 0) {
        result.push(0)
        return result
    }


    result.push(countElements(ls))

    ls.shift()

    partsSums(ls)

    return result
}

console.log(partsSums([0, 1, 3, 6, 10]))
