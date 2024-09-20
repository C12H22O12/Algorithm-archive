const game = (N, M, character, map) => { // 내 방식 -> BFS 방식(queue) 이용
    const [x, y, d] = character.split(' ').map(e => Number(e))
    const DIRECTION = {
        0 : 'NORTH',
        1 : 'EAST',
        2 : 'SOUTH',
        3 : 'WEST'
    }
    const length = Object.keys(DIRECTION).length

    const queue = []
    let res = 1 // 현재 위치 1 표시
    let visited = 0

    queue.push([x, y, d])

    while(visited < length) { // 모든 방향 다 돌 때까지
        const [nx, ny, nd] = queue.shift()
        
        let dx = nx
        let dy = ny
        let dd = (nd + 1) % length
        
        switch (DIRECTION[nd]) {
            case 'NORTH':
                dx -= 1
                break;
            case 'EAST':
                dy += 1
                break;
            case 'SOUTH':
                dx += 1
                break;
            case 'WEST':
                dy -= 1
                break;
        }
                 
        if (map[dy][dx] === 0) { // 아직 방문하지 않은 곳이면
            res += 1
            visited = 0
            map[dy][dx] = 2 // 갔다온 곳 표시
            queue.push([dx, dy, dd])
            continue
        }

        visited += 1
        queue.push([nx, ny, dd])
        
    }

    // 뒤로 이동하는 코드 필요

    return res
}

/*
function game(N, M, character, map) { // 책의 파이썬 코드를 js 코드로 변환 -> DFS 방식 이용
    const [a, b, d] = character.split(' ').map(Number); // 캐릭터 위치 및 방향을 초기화
    let result = 1;
    const input_table = map.map(row => [...row]); // 원본 맵을 복사
    
    // 방문 처리용 맵을 복사
    const visited = input_table.map(row => [...row]);
    visited[a][b] = 1; // 현재 위치 방문 처리

    let turn_count = 0;

    // 방향 배열 (북, 동, 남, 서 순서로)
    const direction = [
        [-1, 0],  // 북쪽
        [0, 1],   // 동쪽
        [1, 0],   // 남쪽
        [0, -1]   // 서쪽
    ];

    // 왼쪽으로 회전하는 함수
    const turn_left = () => {
        if (d === 0) d = 3;
        else d -= 1;
        turn_count += 1;
    };

    let x = a, y = b, current_direction = d;

    while (true) {
        // 4방향 모두 돌았을 경우, 뒤로 이동
        if (turn_count === 4) {
            const back_direction = (current_direction + 2) % 4;
            const back_x = x + direction[back_direction][0];
            const back_y = y + direction[back_direction][1];

            // 뒤쪽이 바다(1)라면 게임 종료
            if (input_table[back_x][back_y] === 1) {
                break;
            }

            // 뒤로 이동
            x = back_x;
            y = back_y;
            turn_count = 0;
        }

        // 왼쪽으로 회전
        turn_left();

        // 회전 후의 다음 위치 계산
        const next_x = x + direction[current_direction][0];
        const next_y = y + direction[current_direction][1];

        // 방문하지 않은 곳이고 육지(0)일 경우 이동
        if (visited[next_x][next_y] === 0 && input_table[next_x][next_y] === 0) {
            x = next_x;
            y = next_y;
            visited[x][y] = 1; // 방문 처리
            result += 1; // 방문 지역 수 증가
            turn_count = 0; // 회전 횟수 초기화
        }
    }

    return result;
}

console.log(game(4, 4, '1 1 0', [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]));


*/

console.log(game(4, 4, '1 1 0', [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]))