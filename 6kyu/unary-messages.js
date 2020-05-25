function send(text) {
    let binaryCode = text.split('').map((el) => (el.charCodeAt()).toString(2)).join('')
    let modified = []

    if(binaryCode[0] === '1') modified.push('0 ')
    if(binaryCode[0] === '0') modified.push('00 ')

    for(let i=0; i<binaryCode.length; i++) {
        modified.push(binaryCode[i])
        if(binaryCode[i] === '1' && binaryCode[i+1] === '0') modified.push(' 00 ')
        if(binaryCode[i] === '0' && binaryCode[i+1] === '1') modified.push(' 0 ')
    }

    return modified.map((e) => {
        if(e === '1') return '0'
        return e
    }).join('')
}

function receive(text) {
  return
}

console.log(send("Chuck Norris' keyboard has 2 keys: 0 and white space." + '\n'))
console.log('')
// console.log('#########################\n')
// console.log(send('aC '))
