function bowling(N, M, balls) {
    let cnt = 0

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++){
            if (balls[i] !== balls[j]) {
                cnt += 1;
            }
        }
    }

    return cnt
}

console.log(bowling(5, 3, [1,3,2,3,2]))
console.log(bowling(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]))