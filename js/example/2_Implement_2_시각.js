function time(N) {
    const start = new Date(`2024/09/16 00:00:00`)
    const end = new Date(`2024/09/16 ${N}:59:59`)

    let ans = 0

    for(let i = start.getTime(); i <= end.getTime(); i += 1000) {
        const now = new Date(i)
        const hour = now.getHours().toString()
        const min = now.getMinutes().toString()
        const second = now.getSeconds().toString()

        if (hour.includes('3') || min.includes('3') || second.includes('3')) {
            ans += 1
        }
    }

    return ans
}

console.log(time(5))