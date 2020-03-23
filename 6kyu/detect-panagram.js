function isPangram(string){

    let count = 0
    let strSet = new Set(string.toLowerCase().split(''))

    if(string.length <= 26) return false

    strSet.forEach((ch, i) => {
        let charCode = string.charCodeAt(i)
        if(
            charCode >= 97 || charCode <= 122
        ) {
            count++
        }
    })

    return count < 27 ? false : true
}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string))
