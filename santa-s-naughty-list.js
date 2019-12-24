function findChildren(santasList, children) {
    return children.filter(child => santasList.indexOf(child) != -1).sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]));
console.log(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]));
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]));
