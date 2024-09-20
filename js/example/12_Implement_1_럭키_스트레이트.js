const straight = (N) => {
    const arr = N.split('')
    const lens = N.length
    let tmp1 = 0
    let tmp2 = 0

    for (let i = 0; i < Math.floor(lens/2); i++) {
        console.log(tmp1, tmp2)
        tmp1 += Number(arr[i])
        tmp2 += Number(arr[lens - 1 - i])
    }

    return tmp1 === tmp2 ? 'LUCKY' : 'READY'
}

console.log(straight('123402'))
console.log(straight('7755'))