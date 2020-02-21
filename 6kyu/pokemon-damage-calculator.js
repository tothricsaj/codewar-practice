function calculateDamage(yourType, opponentType, attack, defense){

    const types = {
        fire: { fire: 0.5, water: 0.5, grass: 2, electric: 1 },
        water: { fire: 2, water: 0.5, grass: 0.5, electric: 0.5 },
        grass: { fire: 0.5, water: 2, grass: 0.5, electric: 1 },
        electric: { fire: 1, water: 2, grass: 1, electric: 0.5 },

    }

    return 50 * (attack / defense) * types[yourType][opponentType]
}

// console.log(calculateDamage("fire", "water", 100, 100));
console.log(calculateDamage("grass", "water", 100, 100))
// console.log(calculateDamage("electric", "fire", 100, 100))
// console.log(calculateDamage("grass", "electric", 57, 19))
console.log(calculateDamage("grass", "water", 40, 40))
console.log(calculateDamage("grass", "fire", 35, 5))
// console.log(calculateDamage("fire", "electric", 10, 2))
