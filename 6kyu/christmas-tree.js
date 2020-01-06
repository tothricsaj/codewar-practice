function christmasTree(height) {
    let riseCountVal = 2;
    let stars = '*\n';

    for(let i=0; i<height-1; i++) {

        for(let n=0; n<riseCountVal+1; n++) {
            stars += '*';
        }

        stars += '\n';

        riseCountVal += 2;
    }

    return stars;
}

// console.log(christmasTree(1))
// console.log(christmasTree(2))
// console.log(christmasTree(3))
// console.log(christmasTree(4))
console.log(christmasTree(5))
// console.log(christmasTree(6))
