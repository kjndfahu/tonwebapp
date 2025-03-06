export const filterMemoInput = (input: string): string => {
    const MAX_MEMO_LENGTH = 124

    const filteredInput = input.replace(/[^a-zA-Z0-9\s.,;:!?@#$%&*()-_+=]/g, "")

    return filteredInput.slice(0, MAX_MEMO_LENGTH)
}

