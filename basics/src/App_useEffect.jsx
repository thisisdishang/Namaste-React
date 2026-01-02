/*
    useEffect Hook:
    - useEffect is used to perform side effects in React components.
    - Side effects: API Calling, DOM Manipulation, Button Click

    Syntax: useEffect(callback, dependencies)
    
    3 Main Patterns:
    1. useEffect(() => {})           → Runs on mount + re-rendering (any state changes)
    2. useEffect(() => {}, [])       → Runs ONLY on mount
    3. useEffect(() => {}, [value])  → Runs on mount + when 'value' changes
*/

import { useState, useEffect } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");

    // Pattern 1: mount + re-rendering (any state changes)
    useEffect(() => {
        console.log("I am re-rendering");
    });

    // Pattern 2: mount only (empty dependency array)
    useEffect(() => {
        console.log("calling advice API once");
        fetch('https://api.adviceslip.com/advice/search/tree')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
    }, []);

    // Pattern 3: mount + only when searchValue changes
    useEffect(() => {
        console.log("calling advice API with search query");
        fetch(`https://api.adviceslip.com/advice/search/${searchValue}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
    }, [searchValue]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>useEffect Demo</h1>
            <p>Open browser console (F12) to see useEffect in action!</p>

            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{ padding: "8px", fontSize: "16px" }}
            />
            <p>Type something to trigger the useEffect with [searchValue] dependency</p>
        </div>
    );
}

export default App;