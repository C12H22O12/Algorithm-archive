const N = 5
const own = [8, 3, 7, 9, 2]
const M = 3
const customer = [5, 7, 9]

const find_recursion = (target, start, end) => {    
    const mid = Math.floor((start+end)/2)
    
    if (start === end) return "no" 

    if (own[mid] > target) return find_recursion(target, start, mid - 1)
    else if (own[mid] === target) return "yes"
    else return find_recursion(target, mid+1, end)
}

// or

const find_for = (target, start, end) => {
    while (start <= end) {
        const mid = (start + end) / 2 >> 0;

        if(own[mid] > target) end = mid - 1
        else if (own[mid] === target) return "yes"
        else start = mid + 1
    }

    return "no"
}

let answer = []

own.sort((a, b) => a - b)

for (let i = 0; i < M; i++) {
    answer.push(find_for(customer[i], 0, N))
}

console.log(answer.join(' '))