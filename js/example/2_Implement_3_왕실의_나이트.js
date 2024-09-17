const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const knight = (N, M, location) => {
    const n = alphabet.indexOf(location.slice(0, 1))
    const m = Number(location.slice(1, location.length))

    const moving = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]]

    let res = 0

    for (let [x, y] of moving) {
        const dx = n + x
        const dy = m + y

        if (0 < dx && dx <= N && 0 < dy && dy <= M) {
            res += 1
        }
    }

    return res
}

console.log(knight(8, 8, 'a1'))
console.log(knight(8, 8, 'c2'))
console.log(knight(8, 8, 'e5'))
console.log(knight(8, 8, 'h7'))
console.log(knight(18, 18, 's13'))