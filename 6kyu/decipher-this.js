function decipherThis(str) {
    
    let arr = str.split(' ')

    arr = arr.map((el, i) => {
        let reg = /\d+/g
        let firstChar = String.fromCharCode(el.match(reg))
        let firstCharLength = el.match(reg)[0].length

        let str = firstChar + el.slice(firstCharLength) 

        if(str.length > 2) {
            
            let deciphered = str[0] + str[str.length -1] + str.substring(2, str.length - 1) + str[1]
            str = deciphered
        }

        return str

        
    })

    return arr.join(' ')
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
