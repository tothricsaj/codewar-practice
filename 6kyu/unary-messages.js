function send(text) {
    let binaryCode = (text.charCodeAt()).toString(2)
    let res = ''
    let swap = true

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

function receive(text) {
  return
}

console.log(send('CC') + '\n')
console.log('#########################\n')
console.log(send('a'))
