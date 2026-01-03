/*
    variables or values:
    useState:
    - that should be persisted between renders
    - UI to get changed
    - state immutable (it would not change, in that place it would create new object)

    create any JavaScript variable:
    - that should not be persisted between renders
    - UI should not get changed

    useRef:
    - useRef is a hook
    - that should be persisted between renders
    - UI should not get changed
    - ref mutable
    - to access DOM elements

*/
import { useRef, useState } from "react";

const App = () => {
    // useRef gives => object => current property => value
    let countRef = useRef(0);

    const [anotherValue, setAnotherValue] = useState(1);

    return <>
        <h1>Hello Hooks! count: {countRef.current}, anotherValue: {anotherValue}</h1>
        <button onClick={() => {
            countRef.current++;
            console.log(`the value of count is ${countRef.current}`)
        }}>Increment</button>
        <button onClick={() => setAnotherValue(anotherValue - 1)}>Decrement</button>
    </>
}

export default App;