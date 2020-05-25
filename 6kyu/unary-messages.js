function send(text) {
    let binaryCode = text.split('').map((el) => (el.charCodeAt()).toString(2)).join('')

    return binaryCode
}

function receive(text) {
  return
}

console.log(send('C') + '\n')
console.log('')
// console.log('#########################\n')
// console.log(send('aC '))
