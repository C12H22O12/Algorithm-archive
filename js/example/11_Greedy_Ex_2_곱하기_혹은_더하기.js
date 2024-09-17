function calculation(number) {
    const nums = number.split('').map((n) => Number(n))
    return nums.reduce((acc, cur) =>  cur > 0 ? acc * cur: acc + cur, 1)
}

console.log(calculation('02984'))
console.log(calculation('567'))