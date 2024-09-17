function grouped(N, adventurer) {
    let remained = adventurer.sort((a,b) => a-b)
    let cnt = 0

    while (remained.length > 0) {
        const group = remained[remained.length - 1];
        remained = remained.slice(group - 1, remained.length - 1)
        cnt += 1
    }

    return cnt
}

console.log(grouped(5, [2, 3, 1, 2, 2]))