const sortStr = (S) => {
    const arr = S.split('').sort()
    let res = ''
    let tmp = 0

    for (let i in arr) {
        const value = Number(arr[i])
        if (isNaN(value)) {
            res = arr.slice(i).join('')
            break
        }

        tmp += value
    }

    res += tmp.toString()

    return res
}

console.log(sortStr('K1KA5CB7'))
console.log(sortStr('AJKDLSI412K4JSJ9D'))