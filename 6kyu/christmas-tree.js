function christmasTree(height) {
    let padsLength = height - 1,
        starLength = 1, // height + (height - 1),
        tree = '';

    for(let i=0; i<height; i++) {
        let pads = new Array(padsLength).fill(' ').join('');
        let stars = new Array(starLength).fill('*').join('');

        tree += pads + stars + pads + '\n';

        padsLength--;
        starLength += 2;
    }

    return tree.substr(0, tree.length - 1);
}

console.log(christmasTree(1))
console.log(christmasTree(2))
console.log(christmasTree(3))
console.log(christmasTree(4))
console.log(christmasTree(5))
console.log(christmasTree(6))
