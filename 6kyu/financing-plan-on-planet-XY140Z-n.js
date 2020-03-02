function finance(n) {
    let days = []
    for(let i=0; i<=n; i++) days.push(new Array(n + 1).fill(0))

    days.forEach((row, index) => {
        row[index] = index * 2;
    });

    return days
}

console.log(finance(6))
