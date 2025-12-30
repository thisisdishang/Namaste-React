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

    const advices = [
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
    ];

    return <>
        <Header />
        <div style={{ textAlign: 'center' }}>
            <SearchBox placeholder="Search for advice" value={searchObject.searchValue} changeHandler={(event) => setSearchObject({ ...searchObject, searchValue: event.target.value })} />
            <Filter value={searchObject.searchCategory} changeHandler={(event) => setSearchObject({ ...searchObject, searchCategory: event.target.value })} />
        </div>
        <AdviceCardList advices={advices.filter(advice => advice.text.toLowerCase().includes(searchObject.searchValue.toLowerCase()) && (searchObject.searchCategory === "all" || advice.category.toLowerCase().includes(searchObject.searchCategory.toLowerCase())))} />
        {/* {
            // I would give list of advices and i want list of AdviceCard Component
            advices.map(advice => <AdviceCard advice={advice} />)
        } */}
    </>
}

export default App;