function binaryToUnary(binaryCode) {
    let res = ''
    let swap = true

    if(binaryCode.length < 7) {
        let tmp = binaryCode.split('')

        for(let i=0; i< 7-binaryCode.length; i++) {
            tmp.unshift(0)
        }

        binaryCode = tmp.join('')
    }

    for(let i=0; i<binaryCode.length; i++) {

        if(binaryCode[i] === '1' && swap) {
            res += '0 '
            swap = false
        } else if(binaryCode[i] === '0' && swap) {
            res += '00 '
            swap = false
        }

        res += '0'

        if(binaryCode[i+1] !== binaryCode[i] && binaryCode[i+1] !== undefined) {
            swap = !swap
            res += ' '
        }
    }
    
    return res
}


function send(text) {
    let binaryCode = text.split('').map((el) => {
        return (el.charCodeAt()).toString(2)
    }).join('')

    return binaryToUnary(binaryCode)
}

function receive(text) {
  return
}

console.log(send('%') + '\n')
console.log('00 0 0 0 00 00 0 0 00 0 0 0')
// console.log('#########################\n')
// console.log(send('aC '))
