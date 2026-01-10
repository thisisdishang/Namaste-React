// action generators
export const resetCounterAction = (payload = 0) => {
    // preprocessing
    return { type: "RESET", payload: payload }
}

export const addCounterAction = (payload = 1) => {
    return { type: "ADD", payload: payload }
}

export const subtractCounterAction = (payload = 1) => {
    return { type: "SUBTRACT", payload: payload }
}