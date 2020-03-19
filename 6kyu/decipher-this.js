function decipherThis(str) {
    
    let arr = str.split(' ')

    arr = arr.map((el, i) => {
        let reg = /\d+/g
        let firstChar = String.fromCharCode(el.match(reg))
        let firstCharLength = el.match(reg)[0].length

        console.table({
            firstChar: firstChar,
            firstCharLength: firstCharLength,
            code: el.match(reg)[0]
        })

        return firstChar + el.slice(firstCharLength)

        
    })

    return arr 
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
