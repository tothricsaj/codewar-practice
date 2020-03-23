function isPangram(string){

    let strSet = new Set(string.replace(/[^a-zA-Z]/gi,'').toLowerCase())
    return strSet.size === 26
}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string))
