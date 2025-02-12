export function generateRandomNumber(): { numbers: number[]; result: number } {
    const numbers = Array(27)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10) + 1)
    const result = numbers[Math.floor(numbers.length / 2)]
    return { numbers, result }
}

