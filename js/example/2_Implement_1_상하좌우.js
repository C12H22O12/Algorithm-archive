function movement(N, plan) {
    const moving = (plans, x, y, idx) => {
        switch (plans[idx]) {
            case 'L':
                return moving(plans, x - 1 <= 0 ? x : x - 1, y, ++idx)
            case 'R':
                return moving(plans, x === N ? x : x + 1, y, ++idx)
            case 'U':
                return moving(plans, x, y - 1 <= 0 ? y : y - 1, ++idx)
            case 'D':
                return moving(plans, x, y === N ? y : y + 1, ++idx)
            default:
                return [y, x]
        }
    }

    return moving(plan.split(' '), 1, 1, 0)
}

console.log(movement(5, 'R R R U D D'))