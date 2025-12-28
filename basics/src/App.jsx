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

function App() {
    const advices = [
        "Plant a Tree!",
        "Ego is the Enemy!",
        "Obstacle is the Way!",
        "Stillness is the Key!",
        "The Only Constant is Change!",
    ];

    return <>
        <Header />
        <SearchBox placeholder="Search for advice" />
        <AdviceCardList advices={advices} />
        {/* {
            // I would give list of advices and i want list of AdviceCard Component
            advices.map(advice => <AdviceCard advice={advice} />)
        } */}
    </>
}

export default App;