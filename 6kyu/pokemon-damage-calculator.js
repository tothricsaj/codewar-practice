function calculateDamage(yourType, opponentType, attack, defense){

    let effectiveness;

    if (yourType === 'fire') {
        switch(opponentType) {
            case 'grass':
                effectiveness = 2;
                break;
            case 'water':
                effectiveness = 0.5;
                break;
            case 'electric':
                effectiveness = 1;
                break;
            default:
                effectiveness = 1;
        }
    } else if (yourType === 'water') {
        switch(opponentType) {
            case 'grass':
                effectiveness = 0.5;
                break;
            case 'electric':
                effectiveness = 0.5;
                break;
            default:
                effectiveness = 1;
        }
    } else if (yourType === 'grass' && opponentType === 'electric') {
        effectiveness = 1;
    } else {
        effectiveness = 1;
    }

    return 50 * (attack / defense) * effectiveness
}

console.log(calculateDamage("fire", "water", 100, 100));
console.log(calculateDamage("grass", "water", 100, 100))
