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

function App() {
    // destructuring the array
    const [searchValue, setSearchValue] = useState("")
    /* 
    useState is a hook=> is a JavaScript function that returns an array.
    and that array has two elements - value, function to change the value.
    */

    const advices = [
        {
            id: 1,
            text: "Plant a Tree!"
        },
        {
            id: 2,
            text: "Ego is the Enemy!"
        },
        {
            id: 3,
            text: "Obstacle is the Way!"
        },
        {
            id: 4,
            text: "Stillness is the Key!"
        },
        {
            id: 5,
            text: "The Only Constant is Change!"
        },
    ];

    return <>
        <Header />
        <SearchBox placeholder="Search for advice" value={searchValue} changeHandler={(event) => setSearchValue(event.target.value)} />
        <AdviceCardList advices={advices.filter(advice => advice.text.toLowerCase().includes(searchValue.toLowerCase()))} />
        {/* {
            // I would give list of advices and i want list of AdviceCard Component
            advices.map(advice => <AdviceCard advice={advice} />)
        } */}
    </>
}

export default App;