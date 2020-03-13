function send(text) {
    let binaryCode = (text.charCodeAt()).toString(2)
    let res = ''
    let isOne = true

    for(let i=0; i<binaryCode.length; i++) {
        let buff = ''

        if(binaryCode[i] === '1') isOne = true
        else isOne = false

        if(isOne) {
            buff += '0 '

            for(let ind = i; ind<binaryCode.length; ind++) {
                if(binaryCode[ind] !== '1') break;
                buff += '0'
            }

            buff += ' '
        } else {
            buff += ' 00 '

            for(let ind = i; ind<binaryCode.length; ind++) {
                if(binaryCode[ind] !== '1') break;
                buff += '0'
            }

            buff += ' '

        }

        res += buff
    }

    return res
}

function receive(text) {
  return
}

console.log(send('C'))
