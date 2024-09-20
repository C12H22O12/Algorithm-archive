function solution(s) {
    const arr = s.split('')
    let tmp = ''
    let res = s
    let dup = 1
    
    for (let slice = 1; slice < s.length; slice ++) {
        for (let i = 0; i < arr.length; i += slice) {
            const before = arr.slice(i, i + slice).join('')
            const after = arr.slice(i+slice, i + slice * 2).join('')

            if (before === after) {
                dup += 1
            } else {
                tmp += (dup > 1 ? dup : '') + before
                dup = 1
            }
        }

        if (res.length > tmp.length) {
            res = tmp
        }
        
        tmp = ''
    }
    
    return res.length
}