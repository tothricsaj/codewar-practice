/*
function getMiddle(s) {
    if (s.length % 2 == 0) return s.substring(
        Math.floor((s.length - 1) / 2), 
        Math.floor((s.length - 1) / 2) + 2
    );
    else return s[Math.floor((s.length - 1) / 2)];
}
*/

function getMiddle(s) {
    let middle = Math.ceil(s.length / 2 - 1);
    return s.substring(middle, s.length % 2 === 0 ? middle + 2:middle + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle('A'));
console.log(getMiddle('testing'));
