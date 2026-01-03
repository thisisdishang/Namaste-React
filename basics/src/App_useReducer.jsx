import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + (action.payload || 1);
        case "decrement":
            return state - (action.payload || 1);
        default:
            return state;
    }
}

const App = () => {
    const [value, dispatch] = useReducer(reducer, 1);
    return (
        <div>
            <h1>useReducer Demo</h1>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
            <p>Count: {value}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
    );
}

export default App;