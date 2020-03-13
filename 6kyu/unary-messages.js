function send(text) {
    let binaryCode = (text.charCodeAt()).toString(2)
    let res = ''
    let referenc = binaryCode[0]

    console.log(`binaryCode -> ${binaryCode}`)
    console.log('------------------------------------------')

    if(binaryCode[0] === '1') res+='0 0'
    else if(binaryCode[0] === '0') res+='00 0'

    for(let i=1; i<binaryCode.length; i++) {
        let buff = ''

        if(binaryCode[i+1] === '1' && referenc !== '1') buff += ' 0 '
        else if(binaryCode[i+1] === '0' && referenc !== '0') buff += ' 00 '

        if(binaryCode[i+1] !== referenc) referenc = binaryCode[i+1]

        buff += '0'

        console.table({
            index: i,
            currChar: binaryCode[i],
            nextChar: binaryCode[i+1],
            reference: referenc,
            buff: buff
        })

        res += buff
    }

    return res
}

function receive(text) {
  return
}

console.log(send('C'))
