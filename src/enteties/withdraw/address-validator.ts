export const filterTonAddressInput = (input: string): string => {
    if (input.length === 0) return ""

    if (input.length === 1) {
        if (input === "E" || input === "U") {
            return input
        }
        return ""
    }

    if (input.length === 2) {
        const firstChar = input[0]
        const secondChar = input[1]

        if ((firstChar === "E" || firstChar === "U") && secondChar === "Q") {
            return input
        }
        return input[0]
    }

    const prefix = input.substring(0, 2)
    const rest = input.substring(2)

    let validPrefix = ""
    if (prefix === "EQ" || prefix === "UQ") {
        validPrefix = prefix
    } else if (prefix[0] === "E" || prefix[0] === "U") {
        validPrefix = prefix[0] + (prefix[1] === "Q" ? "Q" : "")
    }

    const validRest = rest.replace(/[^a-zA-Z0-9_-]/g, "")

    return validPrefix + validRest
}

