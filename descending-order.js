function descendingOrder(n){
  return new Number(new String(n).split('').sort().reverse().join('')).valueOf();
}

console.log(descendingOrder(123456789))
console.log(descendingOrder(1))
console.log(descendingOrder(0))
console.log(descendingOrder(13021))
