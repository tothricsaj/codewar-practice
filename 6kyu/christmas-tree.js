function christmasTree(height) {

    let stars = new Array(height).fill('*');
    let pads = 1;

    for(let dec=height; dec>0; dec--) {
        for(let i=0; i<pads; i++) {
            stars.push(' ');
        }

        for(let i=height; i>0; i--) {
            stars.push('*');
        }

        for(let i=0; i<pads; i++) {
            stars.push(' ');
        }

        pads++;
        height -= 2;
        stars.push('\n');
    }
    
    return stars.reverse().join('');
}

// console.log(christmasTree(1))
// console.log(christmasTree(2))
// console.log(christmasTree(3))
// console.log(christmasTree(4))
console.log(christmasTree(5))
// console.log(christmasTree(6))
