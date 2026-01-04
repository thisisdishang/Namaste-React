/*
Components:
    - Components are the building blocks of React application.
    - Components are reusable and can be nested.
    - Components consists of HTML, CSS and Behavior.

3 main questions developer should have when working on react application
Q1: How many component i am going to create?
    - Create as many components as needed

Q2: What would be my state of component?
    - State is the data that is used to render the component and it will change based on the interaction,
      because of interaction your UI would change.

Q3: Where I should create the state?
    - Follow the concept of 'lift the state up'.
*/

import Header from "./components/Header/Header";
import AdviceCardList from "./components/AdviceCardList/AdviceCardList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import AbstractButton from "./components/AbstractButton/AbstractButton";
import { useAdvice } from "./hooks/useAdvice";

const url = 'https://api.adviceslip.com/advice';

function App() {
    // destructuring the array
    const [searchObject, setSearchObject] = useState({ searchValue: "", searchCategory: "all" })
    /*
        Here state is object
        state:{
            searchValue: '',
            searchCategory: ''
        }
    */
    /* 
    useState is a hook=> is a JavaScript function that returns an array.
    and that array has two elements - value, function to change the value.
    */

    const [error, setError] = useState("")

    const [advices, setAdvices] = useState([
        {
            id: 1,
            text: "Plant a Tree!",
            category: "actionable"
        },
        {
            id: 2,
            text: "Ego is the Enemy!",
            category: "philosophical"
        },
        {
            id: 3,
            text: "Obstacle is the Way!",
            category: "actionable"
        },
        {
            id: 4,
            text: "Stillness is the Key!",
            category: "philosophical"
        },
        {
            id: 5,
            text: "The Only Constant is Change!",
            category: "philosophical"
        },
    ]);

    /*
        Frontend: API -> Backend
        Side effects: API Calling, DOM Manipulation, Button Click
    */
    const fetchRandomAdvice = async () => {
        // In Java: CompletableFuture
        // fetch(url) // Promise 1: url
        //     .then(response => response.json()) // Promise 2: json
        //     .then(data => setAdvices([...advices, { id: advices.length + 1, text: data.slip.advice, category: "philosophical" }]))
        //     .catch(err => console.log(err.message))

        // Try using async await
        try {
            const response = await fetch(url); // Promise 1: resolve of the url
            const data = await response.json(); // Promise 2: resolve of the json
            setAdvices([...advices, { id: advices.length + 1, text: data.slip.advice, category: "philosophical" }])
        }
        catch (error) {
            setError(error.message)
        }
    }

    // Custom Hook: useAdvice
    // const { advices, error, fetchRandomAdvice } = useAdvice();

    return <>
        <Header />
        <div style={{ textAlign: 'center' }}>
            <SearchBox placeholder="Search for advice" value={searchObject.searchValue} changeHandler={(event) => setSearchObject({ ...searchObject, searchValue: event.target.value })} />
            <Filter value={searchObject.searchCategory} changeHandler={(event) => setSearchObject({ ...searchObject, searchCategory: event.target.value })} />
            <AbstractButton label="Random Advice" clickHandler={fetchRandomAdvice} />
        </div>
        {error && <p>{error}</p>}
        <AdviceCardList advices={advices.filter(advice => advice.text.toLowerCase().includes(searchObject.searchValue.toLowerCase()) && (searchObject.searchCategory.toLowerCase() === "all" || advice.category.toLowerCase().includes(searchObject.searchCategory.toLowerCase())))} />
        {/* {
            // I would give list of advices and i want list of AdviceCard Component
            advices.map(advice => <AdviceCard advice={advice} />)
        } */}
    </>
}

export default App;