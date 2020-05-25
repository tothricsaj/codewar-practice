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

    console.log(binaryCode)

    return modified.map((e) => {
        if(e === '1') return '0'
        return e
    }).join('')
}

function receive(text) {
    let arr = text.split(''),
        first = 0,
        middle = 1,
        end = 2
    let decoded = []

    arr.forEach((el, i) => {
        if(arr[first] === '0' && arr[middle] === ' ' && arr[end] === '0') decoded.push(1)
        if(arr[first] === '0' && arr[middle] === '0' && arr[end] === '0') decoded.push(0)

        end++

        if(arr[end] === ' ') {
            first = end + 1
            middle = end + 2
            end = middle + 1
        }
    })

    return String.fromCharCode(parseInt(decoded.join(''), 2).toString(10))
}

// console.log(send("C"))
// console.log(receive(send("C")))

console.log(receive('0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0'))
// console.log('#########################\n')
// console.log(send('aC '))
