import { createStore } from "redux";

function App() {
    return <>
        <h1>Hello Redux!</h1>
    </>
}

// action generators
const resetAction = (payload = 0) => {
    // preprocessing
    return { type: "RESET", payload: payload }
}

const addAction = (payload = 1) => {
    return { type: "ADD", payload: payload }
}

const subtractAction = (payload = 1) => {
    return { type: "SUBTRACT", payload: payload }
}

// reducer
const reducer = (state = { description: 'This is redux store state' }, action) => {
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

const store = createStore(reducer);

console.log(`The state is ${JSON.stringify(store.getState())}`)

// Action object should have mandatory 'type' property
store.dispatch(resetAction())
console.log(`After dispatching RESET action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(addAction(10))
console.log(`After dispatching ADD action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(subtractAction())
console.log(`After dispatching SUBTRACT action, The state is ${JSON.stringify(store.getState())}`)

export default App;