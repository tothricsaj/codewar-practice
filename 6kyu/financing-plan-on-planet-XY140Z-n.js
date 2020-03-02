function finance(n) {
    let days = []
    for(let i=0; i<=n; i++) days.push(new Array(n + 1).fill(0))

    return days
}

console.log(finance(6))
