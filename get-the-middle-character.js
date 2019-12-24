function getMiddle(s) {
    if (s.length % 2 == 0) return s.substring(
        Math.floor((s.length - 1) / 2), 
        Math.floor((s.length - 1) / 2) + 2
    );
    else return s[Math.floor((s.length - 1) / 2)];
}

console.log(getMiddle("test"));
console.log(getMiddle('A'));
console.log(getMiddle('testing'));
