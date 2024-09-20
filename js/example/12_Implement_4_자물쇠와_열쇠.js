function solution(key, lock) {
    const N = lock.length;
    const M = key.length;

    // 자물쇠의 홈이 모두 채워졌는지 확인하는 함수
    const check = (newLock) => {
        for (let i = M - 1; i < N + M - 1; i++) {
            for (let j = M - 1; j < N + M - 1; j++) {
                if (newLock[i][j] !== 1) return false;
            }
        }
        return true;
    };

    // 열쇠를 회전시키는 함수 (90도씩 회전)
    const rotateKey = (key) => {
        const newKey = Array.from(Array(M), () => Array(M).fill(0));
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                newKey[j][M - i - 1] = key[i][j];
            }
        }
        return newKey;
    };

    // 확장된 자물쇠 배열을 만드는 함수
    const extendLock = (lock) => {
        const newLock = Array.from(Array(N + 2 * (M - 1)), () => Array(N + 2 * (M - 1)).fill(0));
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                newLock[i + M - 1][j + M - 1] = lock[i][j];
            }
        }
        return newLock;
    };

    // 열쇠를 확장된 자물쇠에 맞추어 확인하는 함수
    const attach = (x, y, key, newLock) => {
        const copyLock = newLock.map(row => [...row]); // 복사
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                copyLock[x + i][y + j] += key[i][j];
            }
        }
        return copyLock;
    };

    // 열쇠를 네 번 회전시키면서 모든 위치에서 시도
    let newLock = extendLock(lock);
    for (let r = 0; r < 4; r++) {
        key = rotateKey(key); // 열쇠 회전
        for (let i = 0; i <= N + M - 2; i++) {
            for (let j = 0; j <= N + M - 2; j++) {
                const testLock = attach(i, j, key, newLock); // 열쇠를 자물쇠에 맞춰봄
                if (check(testLock)) {
                    return true;
                }
            }
        }
    }

    return false;
}
