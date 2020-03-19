//You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples
//
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    
    return str.split(' ').map((el, i) => {
        let reg = /\d+/g
        let firstChar = String.fromCharCode(el.match(reg))
        let firstCharLength = el.match(reg)[0].length

        let str = firstChar + el.slice(firstCharLength) 

        if(str.length > 2) {
            
            let deciphered = str[0] + str[str.length -1] + str.substring(2, str.length - 1) + str[1]
            str = deciphered
        }

        return str
    }).join(' ')
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
