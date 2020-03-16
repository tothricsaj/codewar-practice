function send(text) {
    let binaryCode = (text.charCodeAt()).toString(2)
    let res = ''
    let swap = true

    console.log(binaryCode)
    console.log('--------------------')

    for(let i=0; i<binaryCode.length; i++) {

        console.table({
            swap: swap,
            currChar: binaryCode[i],
            nextChar: binaryCode[i+1]
        })

        if(binaryCode[i] === '1' && swap) {
            res += '0 '
        } else if(binaryCode[i] === '0' && swap) {
            res += '00 '
            console.log('BOOOOOOM')
        }

        res += '0'

        if(binaryCode[i+1] !== binaryCode[i]) {
            swap = !swap
            res += ' '
        }
    }


    return res
}

function receive(text) {
  return
}

console.log(send('C') + '\n')
console.log('#########################\n')
console.log(send('a'))
