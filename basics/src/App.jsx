/*
Components:
    - Components are the building blocks of React application.
    - Components are reusable and can be nested.
    - Components consists of HTML, CSS and Behavior.
*/
import AdviceCard from "./components/AdviceCard/AdviceCard";
import Header from "./components/Header/Header";
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
        {
            // I would give list of advices and i want list of AdviceCard Component
            advices.map(advice => <AdviceCard advice={advice} />)
        }
    </>
}

export default App;