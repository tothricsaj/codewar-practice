function send(text) {
    let binaryCode = (text.charCodeAt() >>> 0).toString(2).split('')
    return binaryCode.reduce((acc, el, i) => {
        console.log(el)
        if(el === '1') return array.slice()
        else return el
    }, [])
}

function receive(text) {
  return
}

console.log(send('C'))
