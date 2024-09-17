function price(N, coins) {
    coins.sort((a, b) => a - b)

    let target = 1

    for (let i of coins) {
        if (target < i) {
            break
        }
        target += i
    }

    return target
}

console.log(price(1, [9])) // 1
console.log(price(5, [1, 2, 3, 4, 5])) // 16
console.log(price(5, [3, 2, 1, 1, 9])) // 8
console.log(price(3, [3, 5, 7])) // 1
console.log(price(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50])) // 106