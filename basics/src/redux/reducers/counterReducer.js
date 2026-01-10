// reducer
export const counterReducer = (state = { description: 'This is redux store state' }, action) => {
    switch (action.type) {
        case "RESET":
            // return a new JavaScript object.
            return { ...state, counter: 1 };
        case "ADD":
            return { ...state, counter: state.counter + action.payload };
        case "SUBTRACT":
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};