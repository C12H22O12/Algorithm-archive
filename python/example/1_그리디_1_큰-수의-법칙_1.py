import sys

N, M, K = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

arr.sort()
fir = arr[N-1]
sec = arr[N-2]

res = 0

while True:
    for i in range(K):
        if M == 0:
            break
        res += fir
        M -= 1

    if M == 0:
        break

    res += sec
    M -= 1

print(res)
