function switchString(str) {
    const tmp = str.split('')
    let devided = {0:[], 1:[]}

    let cnt = 0
    for (let i = 1; i<= tmp.length; i++){
        if (tmp[i] !== tmp[i - 1]) {
            devided[tmp[i-1]].push(cnt)
            cnt = 0
        }

        cnt += 1
    }

    return Math.min(devided['0'].length, devided['1'].length)
}

console.log(switchString('0001100'))
console.log(switchString('1111001'))
console.log(switchString('1001100'))
console.log(switchString('0101010'))