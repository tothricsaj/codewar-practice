function finance(n) {
  let sum = 0;
  let current_sum;
  for (let i = 0; i <= n; i++) {
    current_sum = ((2 * i + 2 * i + (n - i)) * (n + 1 - i)) / 2;
    sum += current_sum;
  }
  return sum;
}


/*
 function finance(n) {
    let days = []
    let addVal = 0
    let returnArr = () => {
        let arr = []
        for(let i=0; i<=n; i++) {
            arr.push(i)
        }
        return arr
    }

    for(let i=0; i<=n; i++) {
        days.push(returnArr().map((val, index) => {
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

*/

console.log(finance(7))
