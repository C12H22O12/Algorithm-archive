const [N, M] = [5, 6]
const DIRECTION = [[1, 0], [-1, 0], [0, 1], [0, -1]]
const maze = [[1, 0, 1, 0, 1, 0],
             [1, 1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0, 1],
             [1, 1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1, 1]]

const BFS = (r, c) => {
    const queue = [[r, c, 1]]

    while (queue.length > 0) {
        const [i, j, d] = queue.shift();
        maze[i][j] = d

        if (i === N - 1 && j === M - 1) break;

        for (let [dy, dx] of DIRECTION) {
            const y = dy + i;
            const x = dx + j;

            if (0 <= y && y < N && 0 <= x && x < M && maze[y][x] === 1) {
                queue.push([y, x, d + 1])
            }
        }
    }
}

console.log(BFS(0, 0))

console.log(maze[N-1][M-1])