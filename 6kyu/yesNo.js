function yesNo(arr){
    let res = []
    let yes = true

    while(arr.length) {
        for(let i=0; i<arr.length; i++) {
            if(yes) {
                res.push(arr[i])
                arr.splice(i, 1)
                i--
            }

            yes = !yes
        }

        console.table({
            arr: arr,
            res: res
        })
    }

    return res
}

console.log(yesNo([1, 2, 3, 4, 5]))
